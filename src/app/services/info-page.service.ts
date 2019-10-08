import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage;
  portfolio: any[] = [];
  download_data = false;

  constructor(private http: HttpClient) {
    this.downloadInfo();
    this.downloadPortfolio();
  }


  private downloadInfo() {
    //Read file JSON data-page 
    this.http.get('assets/data/data-page.json')
      .subscribe((resp: InfoPage) => {
        this.download_data = true;
        this.info = resp;
        // console.log('this.info', this.info);
      });
  }

  private downloadPortfolio() {
    //Read url firebase 
    this.http.get('https://curriculum-vitae-51728.firebaseio.com/portfolio.json')
      .subscribe((resp: any) => {
        this.portfolio = resp;
        // console.log('portfolio', this.portfolio);
      });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage;
  download_data = false;

  constructor(private http: HttpClient) {

    //Read file JSON data-page 
    this.http.get('assets/data/data-page.json')
        .subscribe((resp: InfoPage) => {
          this.download_data = true;
          this.info = resp;
          console.log('resp', resp)
        })
   }
}

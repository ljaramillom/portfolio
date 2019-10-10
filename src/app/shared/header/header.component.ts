import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _infoPageService: InfoPageService,
              private router: Router) { }

  ngOnInit() {
  }

  searchProduct(value:string){
    if(value.length < 1){
      return;
    }
    
    this.router.navigate(['/search', value]);
  }

}

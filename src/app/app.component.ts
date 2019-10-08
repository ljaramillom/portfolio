import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(public _infoPageService: InfoPageService, 
              public _productsService:ProductsService){

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  download_products = true;
  products: Product[] = [];

  constructor(private http:HttpClient) {
    this.getProducts();
   }

   private getProducts(){
     this.http.get('https://curriculum-vitae-51728.firebaseio.com/products_idx.json')
      .subscribe((resp:Product[]) => {
        this.products = resp;
        setTimeout(() => {
          this.download_products = false;
        }, 2000);
      });
   }

}

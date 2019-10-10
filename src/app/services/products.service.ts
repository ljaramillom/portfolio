import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  download = true;
  products: Product[] = [];
  productsFilter: Product[] = [];

  constructor(private http: HttpClient) {
    this.getAllProducts();
  }

  private getAllProducts() {

    return new Promise((resolve, reject) => {

      this.http.get('https://curriculum-vitae-51728.firebaseio.com/products_idx.json')
      .subscribe((resp: Product[]) => {
        this.products = resp;
        this.download = false;
        resolve();
      });
    });
  }

  public getProduct(id: string) {
    return this.http.get(`https://curriculum-vitae-51728.firebaseio.com/products/${id}.json`)
  }

  searchProduct(value: string) {

    if(this.products.length === 0){
      //download products
      this.getAllProducts().then(()=>{
        //next get products
        //add filter
        this.filterProducts(value);
      });
    } else {
      //add filter
      this.filterProducts(value);
    }
  }

  private filterProducts(value:string){
    this.productsFilter = [];
    value = value.toLocaleLowerCase();
    this.products.forEach(prod => {
      const titleLower = prod.titulo.toLocaleLowerCase();

      if ( prod.categoria.indexOf( value ) >= 0 || titleLower.indexOf( value ) >= 0  ) {
        this.productsFilter.push( prod );
      }
    });
  }

}

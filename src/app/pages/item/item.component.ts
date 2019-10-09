import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductDescription } from 'src/app/interfaces/product-description.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  product: ProductDescription;
  productID: string;

  constructor(private route:ActivatedRoute, 
              public _productsService:ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this._productsService.getProduct(params['id'])
        .subscribe((product: ProductDescription) => {
          this.productID = params['id'];
          this.product = product;
        });
    });
  }

}

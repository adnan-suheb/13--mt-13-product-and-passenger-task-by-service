import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Iproduct } from 'src/app/shared/model/product.interface';

@Component({
  selector: 'app-product-dash',
  templateUrl: './product-dash.component.html',
  styleUrls: ['./product-dash.component.scss']
})
export class ProductDashComponent implements OnInit {

  constructor(
    private _productService:ProductService
  ) { }

  productArr:Iproduct[]=[]

  ngOnInit(): void {
    this.productArr = this._productService.fetchAllProducts()
  }

}

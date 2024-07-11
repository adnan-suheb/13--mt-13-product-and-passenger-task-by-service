import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { UuidService } from 'src/app/service/uuid.service';
import { Iproduct, productEnum } from 'src/app/shared/model/product.interface';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit {

  @ViewChild('prodForm') prodForm!: NgForm
  constructor(
    private _uuidService: UuidService,
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
  }

  onFormSumit() {
    if (this.prodForm.valid) {
      let newProd: Iproduct = {
        ...this.prodForm.value,
        id: this._uuidService.uuid(),
        pstatus: productEnum.InProgress
      }
      this._productService.createNewProduct(newProd);
      this.prodForm.resetForm();
    }
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Iproduct, productEnum } from 'src/app/shared/model/product.interface';

@Component({
  selector: 'app-prod-card',
  templateUrl: './prod-card.component.html',
  styleUrls: ['./prod-card.component.scss']
})
export class ProdCardComponent implements OnInit {


  @Input() getProductObj!: Iproduct

  prodStatusEnum = productEnum
  constructor(
    private _prodservice:ProductService
  ) { }

  ngOnInit(): void {
  }

  onStatusUpdate(data:productEnum){
    this.getProductObj.pstatus = data;
    this._prodservice.updateProdStatus(this.getProductObj)

  }

}

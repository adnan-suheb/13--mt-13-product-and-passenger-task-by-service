import { Injectable } from '@angular/core';
import { Iproduct, productEnum } from '../shared/model/product.interface';
import { UuidService } from './uuid.service';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _uuidService:UuidService,
    private _snackBarService:SnackBarService
  ) { }

  productArr:Iproduct[]=[
    {
      pname:'VIVO Y20',
      pdetails:'Mobile 128gb 6gb',
      pstatus:productEnum.InProgress,
      id:this._uuidService.uuid()
    },
    {
      pname:'Realme Pad 2',
      pdetails:'Tablet 256gb 8gb',
      pstatus:productEnum.Dispatched,
      id:this._uuidService.uuid()
    },
    {
      pname:'SAMSUNG S24 Ultra',
      pdetails:'Mobile 512gb 16gb',
      pstatus:productEnum.Delivered,
      id:this._uuidService.uuid()
    }
  ]



  fetchAllProducts():Iproduct[]{
    return this.productArr
  }

  createNewProduct(data:Iproduct){
    this.productArr.push(data)
    this._snackBarService.openSnackBar(`New Product ${data.pname} Added Successsfully!!!`)
  }

  updateProdStatus(data:Iproduct){
    let getIndex = this.productArr.findIndex(prod=>prod.id===data.id);
    this.productArr[getIndex] = data;
    this._snackBarService.openSnackBar(`Status of ${data.pname} Changed to ${data.pstatus} Successfully!!!`)
  }
}

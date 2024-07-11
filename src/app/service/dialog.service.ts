import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/component/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private _dialog:MatDialog
  ) { }


  openDialog(title:string,message:string){
    const _dialogRef = this._dialog.open(DialogComponent,{
      width:'350px',
      data:{title,message}
    })
    return _dialogRef.afterClosed()
  }
}

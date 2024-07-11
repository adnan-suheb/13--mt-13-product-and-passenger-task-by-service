import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogService } from 'src/app/service/dialog.service';
import { PassengerService } from 'src/app/service/passenger.service';
import { Ipassenger } from 'src/app/shared/model/passenger.interface';

@Component({
  selector: 'app-passenger-card',
  templateUrl: './passenger-card.component.html',
  styleUrls: ['./passenger-card.component.scss']
})
export class PassengerCardComponent implements OnInit {

  @Input() getPassengerObj!:Ipassenger
  @Output() emmitRemoveMsg:EventEmitter<boolean> = new EventEmitter<boolean>()

  isinEditMode:boolean = false

  constructor(
    private _passengerService:PassengerService,
    private _dialogService:DialogService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(data:HTMLInputElement){
    this.getPassengerObj = {...this.getPassengerObj, fname:data.value}
    this._passengerService.updatePassengerInfo(this.getPassengerObj)
  }

  onRemove(data:Ipassenger){
    this._dialogService.openDialog('Confirmation',`Are You sure Want To Remove <strong>${this.getPassengerObj.fname}</strong>?`)
    .subscribe(result=>{
      if(result){
        this._passengerService.removePassenger(this.getPassengerObj)
        this.emmitRemoveMsg.emit(true)
      }
    })
  }

}

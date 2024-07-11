import { Component, Input, OnInit } from '@angular/core';
import { PassengerService } from 'src/app/service/passenger.service';
import { Ipassenger } from 'src/app/shared/model/passenger.interface';

@Component({
  selector: 'app-passenger-dash',
  templateUrl: './passenger-dash.component.html',
  styleUrls: ['./passenger-dash.component.scss']
})
export class PassengerDashComponent implements OnInit {

  passengerArr:Ipassenger[]=[]

totalCount!:number;
checkInCount!:number;
  constructor(
    private _passengerService:PassengerService
  ) { }

  ngOnInit(): void {
    this.passengerArr = this._passengerService.fetchAllPassenger()
    this.getCount()
  }

  getCount(){
    this.totalCount = this.passengerArr.length;
    this.checkInCount = this.passengerArr.filter(pass=>pass.checkInStatus).length;

  }

}

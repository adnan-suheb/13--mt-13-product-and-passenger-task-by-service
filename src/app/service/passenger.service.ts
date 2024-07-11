import { Injectable } from '@angular/core';
import { Ipassenger } from '../shared/model/passenger.interface';
import { SnackBarService } from './snack-bar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(
    private _snackbar: SnackBarService
  ) { }

  passengerArr: Ipassenger[] = [
    {
      fname: "Stephen",
      checkInDate: 1719506962666,
      checkInStatus: true,
      child: 0,
      id: '111'
    },
    {
      fname: "Rose",
      checkInDate: null,
      checkInStatus: false,
      child: 2,
      id: '222'
    },
    {
      fname: "James",
      checkInDate: 1719505962666,
      checkInStatus: true,
      child: 0,
      id: '333'
    },
    {
      fname: "Louise",
      checkInDate: 1719406962666,
      checkInStatus: true,
      child: 1,
      id: '444'
    },
    {
      fname: "Tina",
      checkInDate: null,
      checkInStatus: false,
      child: 0,
      id: '555'
    },

  ]

  fetchAllPassenger(): Ipassenger[] {
    return this.passengerArr
  }

  updatePassengerInfo(data: Ipassenger) {
    let getIndex = this.passengerArr.findIndex(pass => pass.id === data.id)
    let oldObj = this.passengerArr[getIndex]
    this.passengerArr[getIndex] = data
    this._snackbar.openSnackBar(`${oldObj.fname} is updated as ${data.fname} successfully!!!`)

  }

  removePassenger(data: Ipassenger) {
    let removeIndex = this.passengerArr.findIndex(pass => pass.id === data.id);
    this.passengerArr.splice(removeIndex, 1);
    this._snackbar.openSnackBar(`Passenger ${data.fname} removed successfully!!!`)
  }
}

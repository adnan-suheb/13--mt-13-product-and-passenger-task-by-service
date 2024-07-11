import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit {

  @Input() getTotalCount!:number
  @Input() getCheckInCount!:number
  constructor() { }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PassengerDashComponent } from './passenger-dash/passenger-dash.component';
import { PassengerListComponent } from './passenger-list/passenger-list.component';
import { PassengerCardComponent } from './passenger-card/passenger-card.component';



@NgModule({
  declarations: [
    PassengerDashComponent,
    PassengerListComponent,
    PassengerCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[PassengerDashComponent]
})
export class PassengerModule { }

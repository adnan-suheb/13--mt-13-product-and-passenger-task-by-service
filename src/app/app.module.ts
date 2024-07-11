import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ProductModule } from './product/product.module';
import { DialogComponent } from './shared/component/dialog/dialog.component';
import { FormsModule } from '@angular/forms';
import { PassengerModule } from './passenger/passenger.module';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ProductModule,
    FormsModule,
    PassengerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

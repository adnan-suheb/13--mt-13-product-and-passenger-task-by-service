import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashComponent } from './product-dash/product-dash.component';
import { ProdCardComponent } from './prod-card/prod-card.component';
import { ProdFormComponent } from './prod-form/prod-form.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductDashComponent,
    ProdCardComponent,
    ProdFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    ProductDashComponent
  ]
})
export class ProductModule { }

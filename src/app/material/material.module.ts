import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


const materialComponents = [
  MatButtonModule,
  MatSnackBarModule,
  MatDialogModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatDividerModule,MatListModule,
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialComponents
  ],
  exports: [...materialComponents]
})
export class MaterialModule { }

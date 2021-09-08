import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';

const material = [
  MatDatepickerModule, 
  MatNativeDateModule,
  MatInputModule
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    material
  ],
  exports: [material]
})
export class MaterialModule { }

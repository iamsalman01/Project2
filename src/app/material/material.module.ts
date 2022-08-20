import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';

const mat = [
  MatSliderModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    mat
  ],
  exports :[

mat,
  ]
})

export class MaterialModule { }

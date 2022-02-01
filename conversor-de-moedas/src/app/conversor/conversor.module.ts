import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './conversor/conversor.component';



@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ConversorComponent
  ]
})
export class ConversorModule { }

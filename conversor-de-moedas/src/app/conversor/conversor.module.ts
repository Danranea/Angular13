import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './conversor/conversor.component';
import { MoedaService } from './services/moeda.service';
import { ConversorService } from './services/conversor.service';



@NgModule({
  declarations: [
    ConversorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    ConversorComponent
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }

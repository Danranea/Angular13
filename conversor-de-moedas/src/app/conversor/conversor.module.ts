import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './conversor/conversor.component';
import { MoedaService } from './services/moeda.service';
import { ConversorService } from './services/conversor.service';
import { FormsModule } from '@angular/forms';
import { NumeroDirective } from './directives/numero.directive';
import { ModalCotacaoComponent } from './modal-cotacao/modal-cotacao.component';
import { DataBrPipe } from './pipes/data-br.pipe';



@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
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

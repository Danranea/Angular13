import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError } from 'rxjs';
import { ConversaoResponse } from '../models/conversao-response.model';
import { Conversao } from '../models/conversao.model';
import { Moeda } from '../models/moeda.model';
import { ConversorService } from '../services/conversor.service';
import { MoedaService } from '../services/moeda.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  @ViewChild("conversaoForm", { static: true }) conversaoForm: NgForm;

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  constructor(private moedaService: MoedaService, private conversorService: ConversorService) { }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  //efetuar a chamada para a conversão dos valores
  init(): void{
    this.conversao = new Conversao('USD', 'BRL', null);
    this.possuiErro = false;
  }

  converter(): void {
    if (this.conversaoForm.form.valid) {
      this.conversorService.converter(this.conversao)
      .pipe(
        catchError(error => {
          this.possuiErro = true;
          error = this.possuiErro
          return error;
        }))
      .subscribe((response: ConversaoResponse) => {
        this.conversaoResponse = response
        console.log(this.conversaoResponse)
      })
    }
  }
}

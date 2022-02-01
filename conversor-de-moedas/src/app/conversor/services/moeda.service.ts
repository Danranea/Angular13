import { Moeda } from './../models/moeda.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  public moedas: Moeda[];

  constructor() { }

  private moedasObj = [
    {"siglas": "AUD", "descricao": "Dólar australiano"},
    {"siglas": "BGN", "descricao": "Lev búlgaro"},
    {"siglas": "BRL", "descricao": "Real brasileiro"},
    {"siglas": "CAD", "descricao": "Dólar canadense"},
    {"siglas": "CHF", "descricao": "Franco suiço"},
    {"siglas": "CNY", "descricao": "Yuan Chinês"},
    {"siglas": "CZK", "descricao": "Coroa República Tcheca"},
    {"siglas": "DKK", "descricao": "Coroa Dinamarquesa"},
    {"siglas": "EUR", "descricao": "Euro"},
    {"siglas": "GBP", "descricao": "Libra Esterlina"},
    {"siglas": "HKD", "descricao": "Dólar de Hong Kong"},
    {"siglas": "HRK", "descricao": "Coroa Croácia"},
    {"siglas": "HUF", "descricao": "Florim Húngaro"}    
  ]

  listarTodas(): Moeda[]{
    if(this.moedas){
      return this.moedas;
    }

    this.moedas = []

    for(let moedaObj of this.moedasObj){
      let moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda);
    }

    return this.moedas;
  }
}

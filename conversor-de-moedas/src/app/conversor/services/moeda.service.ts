import { Moeda } from './../models/moeda.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  public moedas: Moeda[];

  constructor() { }

  private moedasObj = [
    {"sigla": "AUD", "descricao": "Dólar australiano"},
    {"sigla": "BGN", "descricao": "Lev búlgaro"},
    {"sigla": "BRL", "descricao": "Real brasileiro"},
    {"sigla": "CAD", "descricao": "Dólar canadense"},
    {"sigla": "CHF", "descricao": "Franco suiço"},
    {"sigla": "CNY", "descricao": "Yuan Chinês"},
    {"sigla": "CZK", "descricao": "Coroa República Tcheca"},
    {"sigla": "DKK", "descricao": "Coroa Dinamarquesa"},
    {"sigla": "EUR", "descricao": "Euro"},
    {"sigla": "GBP", "descricao": "Libra Esterlina"},
    {"sigla": "HKD", "descricao": "Dólar de Hong Kong"},
    {"sigla": "HRK", "descricao": "Coroa Croácia"},
    {"sigla": "HUF", "descricao": "Florim Húngaro"},
    {"sigla": "USD", "descricao": "Dólar Americano"}    
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

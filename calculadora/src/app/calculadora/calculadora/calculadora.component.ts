import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../service/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-'
  static readonly DIVISAO: string = '/'
  static readonly MULTIPLICACAO: string = '*'

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
  }



}

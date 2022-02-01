import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {

  private readonly TAM_TAB: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;

  private tabuleiro: any;
  private numMovimentos: number;
  private vitoria: any;

  private _jogador: number;
  private _showInicio: boolean;
  private _showTabuleiro: boolean;
  private _showFinal: boolean;

  constructor() { }

  // Inicializa o jogo. Defini a exibição da tela inicial
  inicializa(): void {
    this._showInicio = true;
    this._showTabuleiro = false;
    this._showFinal = false;
    this.numMovimentos = 0;
    this._jogador = this.X;
    this.vitoria = false;
    this.inicializarTabuleiro();
  }

  //Inicializa o Tabuleiro do jogo como vazio para todas as posições
  inicializarTabuleiro(): void {
    this.tabuleiro = [this.TAM_TAB];
    for (let i = 0; i < this.TAM_TAB; i++) {
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO]
    }
  }

  //Retorn se a tela inicio deve ser exibida
  get showInicio(): boolean {
    return this._showInicio;
  }

  //Retorn se o tabuleiro deve ser exibido
  get showTabuleiro(): boolean {
    return this._showTabuleiro;
  }

  //Retorn se a tela final deve ser exibida
  get showFinal(): boolean {
    return this._showFinal;
  }

  //Retorn se a tela final deve ser exibida
  get jogador(): number {
    return this._jogador;
  }

  //Exibe a tela do tabuleiro
  iniciarJogo(): void {
    this._showInicio = false;
    this._showTabuleiro = true;
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora/calculadora.component';
import { CalculadoraService } from './calculadora/service/calculadora.service';
import { ConversorModule } from './conversor/conversor.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { JogoDaVelhaModule } from './jogo-da-velha/jogo-da-velha.module';
import { TarefasModule } from './tarefas/tarefas.module';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    ConversorModule,
    TarefasModule,
    JogoDaVelhaModule,
    AppRoutingModule
  ],
  providers: [
    CalculadoraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

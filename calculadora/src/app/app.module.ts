import { CalculadoraComponent } from './calculadora/calculadora/calculadora.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraService } from './calculadora/service/calculadora.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CalculadoraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

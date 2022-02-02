import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { RouterModule } from '@angular/router';
import { TarefaService } from './shared/tarefa.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';
import { FormsModule } from '@angular/forms';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';



@NgModule({
  declarations: [
    ListarTarefaComponent,    
    CadastrarTarefaComponent, EditarTarefaComponent, TarefaConcluidaDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule 
  ],
  providers:[
    TarefaService
  ], 
  exports: [TarefaConcluidaDirective]
})
export class TarefasModule { }

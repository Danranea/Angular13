import { Tarefa } from './../shared/tarefa.model';
import { TarefaService } from './../shared/tarefa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: Tarefa[]
  concluida: boolean = false;

  constructor(private tarefaService: TarefaService) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  remover(tarefa: Tarefa): void{
    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  alterarStatus(concluida: boolean, tarefa: Tarefa): void {
    if (confirm('Deseja alterar a tarefa "' + tarefa.nome + '"?')){
      concluida = !concluida
      const tarefas: Tarefa[] = this.listarTodos();
      tarefas.forEach((obj) => {
        if (tarefa.id === obj.id) {
         tarefa.concluida = concluida;
        }
      });
      localStorage['tarefas'] = JSON.stringify(tarefas);
    }
  }

}

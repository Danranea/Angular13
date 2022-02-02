import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar/listar-tarefa.component';

export const TarefaRoute: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }
];


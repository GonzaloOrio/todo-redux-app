import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AppState } from './../../app.reducers';
import * as fromTodoActions from './../todo.actions';
import * as fromFilterActions from '../../filter/filter.actions';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  pedingTasks: number;

  validFilters: fromFilterActions.validFilters[] = ['todos', 'completados', 'pendientes'];
  filterSelected: fromFilterActions.validFilters;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.pendingcounterTasks(state.todos);
      this.filterSelected = state.filter;
    });
  }

  changeFilter(nuevoFiltro: fromFilterActions.validFilters) {
    const action: Action = new fromFilterActions.SetFilterAction(nuevoFiltro);
    this.store.dispatch(action);
  }

  pendingcounterTasks(todos: Todo[]) {
    this.pedingTasks = todos.filter(task => {
      return !task.completado;
    }).length;
  }

  limpiarCompletados() {
    const action: Action = new fromTodoActions.LimpiarCompletadasAction();
    this.store.dispatch(action);
  }
}

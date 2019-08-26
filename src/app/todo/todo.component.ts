import { Component, OnInit } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import * as fromTodoActions from './todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  completado: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  selectAll() {
    this.completado = !this.completado;
    const action: Action = new fromTodoActions.MarcarTodasCompletadasAction(this.completado);
    this.store.dispatch(action);
  }
}

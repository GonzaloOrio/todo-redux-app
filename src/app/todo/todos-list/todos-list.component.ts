import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
import * as fromFilterActions from '../../filter/filter.actions';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {
  todosList: Todo[] = [];
  actualFilter: fromFilterActions.validFilters;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // this.store.select('todos').subscribe(todos => (this.todosList = todos));
    this.store.subscribe(state => {
      this.todosList = state.todos;
      this.actualFilter = state.filter;
    });
  }
}

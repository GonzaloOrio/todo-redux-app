import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import * as fromFilterActions from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: fromFilterActions.validFilters): Todo[] {
    switch (filter) {
      case 'completados':
        return todos.filter(task => {
          return task.completado;
        });

      case 'pendientes':
        return todos.filter(task => {
          return !task.completado;
        });

      default:
        return todos;
    }
  }
}

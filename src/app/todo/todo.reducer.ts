import * as fromTodo from './todo.actions';
import { Todo } from './model/todo.model';

const todo1 = new Todo('tarea 1');
const todo2 = new Todo('tarea 2');
const todo3 = new Todo('tarea 3');

todo2.completado = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, action: fromTodo.Actions): Todo[] {
  switch (action.type) {
    case fromTodo.ADD_TODO:
      const todo = new Todo(action.texto);
      return [...state, todo];
    case fromTodo.CHECKED_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            completado: !item.completado
          };
        } else {
          return item;
        }
      });

    case fromTodo.CHANGE_TEXT_TODO:
      return state.map(item => {
        if (item.id === action.id) {
          return {
            ...item,
            texto: action.texto
          };
        } else {
          return item;
        }
      });

    case fromTodo.CLEAR_COMPLETED_TODO:
      return state.filter(item => !item.completado);

    case fromTodo.DELETE_TODO:
      return state.filter(item => item.id !== action.id);

    case fromTodo.CHECKED_ALL_TODO:
      return state.map(item => {
        return {
          ...item,
          completado: action.completado
        };
      });

    default:
      return state;
  }
}

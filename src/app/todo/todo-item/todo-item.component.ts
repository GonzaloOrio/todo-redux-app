import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../model/todo.model';
// import { CambiarEstadoTodoAction } from '../todo.actions';
import * as fromTodoActions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @ViewChild('txtInputfisico') txtInputfisico: ElementRef;

  @Input() item: Todo;

  checkField: FormControl;
  txtInput: FormControl;

  editando: boolean;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.checkField = new FormControl(this.item.completado);
    this.txtInput = new FormControl(this.item.texto, Validators.required);

    this.checkField.valueChanges.subscribe(() => {
      const action = new fromTodoActions.CambiarEstadoTodoAction(this.item.id);
      this.store.dispatch(action);
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputfisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) {
      this.txtInput.setValue(this.item.texto);
      return;
    }

    if (this.txtInput.value === this.item.texto) {
      return;
    }
    const action = new fromTodoActions.ModificartextoTodoAction(this.item.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  borrarTarea() {
    const action = new fromTodoActions.BorrarTodoAction(this.item.id);
    this.store.dispatch(action);
  }
}

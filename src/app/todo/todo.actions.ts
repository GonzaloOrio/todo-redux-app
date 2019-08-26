import { Action } from '@ngrx/store';

export const ADD_TODO = '[TODO] Agregar todo';
export const CHECKED_TODO = '[TODO] Cambiar estado todo';
export const CHECKED_ALL_TODO = '[TODO] Marcar todas tareas completadas';
export const CLEAR_COMPLETED_TODO = '[TODO] Limpiar tareas completadas';
export const CHANGE_TEXT_TODO = '[TODO] Modificar texto todo';
export const DELETE_TODO = '[TODO] Borrar todo';

export class AgregarTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public texto: string) {}
}

export class CambiarEstadoTodoAction implements Action {
  readonly type = CHECKED_TODO;

  constructor(public id: number) {}
}

export class MarcarTodasCompletadasAction implements Action {
  readonly type = CHECKED_ALL_TODO;

  constructor(public completado: boolean) {}
}

export class LimpiarCompletadasAction implements Action {
  readonly type = CLEAR_COMPLETED_TODO;
}

export class ModificartextoTodoAction implements Action {
  readonly type = CHANGE_TEXT_TODO;

  constructor(public id: number, public texto: string) {}
}

export class BorrarTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(public id: number) {}
}

export type Actions =
  | AgregarTodoAction
  | CambiarEstadoTodoAction
  | MarcarTodasCompletadasAction
  | LimpiarCompletadasAction
  | ModificartextoTodoAction
  | BorrarTodoAction;

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToDoListComponent} from './to-do-list/to-do-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {ToDoReducer} from './to-do.reducer';
import {ToDoState} from './to-do.state';

const toDoReducer: ActionReducerMap<ToDoState> = {
  toDos: ToDoReducer
};

@NgModule({
  declarations: [ToDoListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('toDos', toDoReducer)
  ],
  exports: [ToDoListComponent]
})
export class ToToModule {
}

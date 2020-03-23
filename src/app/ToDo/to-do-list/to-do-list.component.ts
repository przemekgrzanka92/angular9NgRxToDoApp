import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import ToDo from '../to-do.model';
import {select, Store} from '@ngrx/store';
import {FormControl, Validators} from '@angular/forms';
import {AddTodo, RemoveTodo, UpdateTodo} from '../to-do.actions';
import {getToDos} from '../to-do.selector';
import {ToDoState} from '../to-do.state';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  toDos: Observable<ToDo[]>;
  newToDo = new FormControl(null, Validators.required);

  constructor(private store: Store<ToDoState>) {
  }

  ngOnInit() {
    this.toDos = this.store.pipe(select(getToDos));
  }

  addToDo() {
    const toDo: ToDo = {id: new Date().getTime(), title: this.newToDo.value, isCompleted: false};
    this.store.dispatch(new AddTodo(toDo));
    this.newToDo.reset();
  }

  updateToDo(toDo: ToDo, toDoTitle: string, toDoStatus: boolean) {
    const updatedToDo: ToDo = {id: toDo.id, title: toDoTitle, isCompleted: toDoStatus};
    this.store.dispatch(new UpdateTodo({id: toDo.id, updatedToDo}));
  }

  removeToDo(toDoId: number) {
    this.store.dispatch(new RemoveTodo({id: toDoId}));
  }

}

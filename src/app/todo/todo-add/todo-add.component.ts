import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Todo from 'src/app/model/Todo.model';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @Output() todoAddEvent = new EventEmitter();

  todoItemValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTodoHandler = () => {
    const newTodoItem: Todo = {title: this.todoItemValue, status: 'pending', date: new Date()}
    this.todoAddEvent.emit(newTodoItem);
    console.log(newTodoItem)
  }

}

import { Component, OnInit } from '@angular/core';
import Todo, { TodoStatus } from '../model/Todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  todoList: Todo[] = [];

  addToTodo = (todoItem: Todo) => {
    this.todoList.push(todoItem);
  };

  //
  changeTodoItemStatusHandler = (changeEvent: {status: TodoStatus, index: number}) => {
    const newList = [...this.todoList];
    newList[changeEvent.index].status = changeEvent.status;
    this.todoList = newList;
  }

  deleteTodoItemHandler = (index: number) => {
    this.todoList.splice(index, 1)
  }
}

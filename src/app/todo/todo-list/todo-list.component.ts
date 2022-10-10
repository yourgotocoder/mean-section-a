import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Todo, { TodoStatus } from 'src/app/model/Todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() todoList: Todo[] = [];
  @Output() deleteTodoItemEvent: EventEmitter<number> = new EventEmitter();
  @Output() changeTodoItemStatusEvent: EventEmitter<{
    status: TodoStatus;
    index: number;
  }> = new EventEmitter();

  formatDate = (date: Date): string => {
    const dateToFormat = new Date(date);
    return `${dateToFormat.getDate()}/${
      dateToFormat.getMonth() + 1
    }, ${dateToFormat.getHours()}:${dateToFormat.getMinutes()}:${dateToFormat.getSeconds()}`;
  };

  sort: string = 'latest';
  show: string = 'all';

  getTodoList = (): Todo[] => {
    let list: Todo[] = [];
    if (this.show === 'all') {
      list = this.todoList;
    } else if (this.show === 'pending') {
      list = this.todoList.filter((item) => item.status === 'pending');
    } else if (this.show === 'on-going') {
      list = this.todoList.filter((item) => item.status === 'on-going');
    } else if (this.show === 'done') {
      list = this.todoList.filter((item) => item.status === 'done');
    }

    if (this.sort === 'latest') {
      list = list.sort((a, b) => {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
      });
    } else if (this.sort === 'oldest') {
      list = list.sort((a, b) => {
        return new Date(a.date).valueOf() - new Date(b.date).valueOf();
      });
    }
    return list;
  };

  changeItemStatus = (status: Event, index: number) => {
    console.log(index, (status.target as HTMLSelectElement).value);
    const statusValue = (status.target as HTMLSelectElement).value;
    this.changeTodoItemStatusEvent.emit({ status: statusValue as TodoStatus, index})
  };

  sortItemsByDate = (list: Todo[]) => {};

  setViewByStatus = (event: Event) => {
    this.show = (event.target as HTMLSelectElement).value;
  };

  setViewByLatest = (event: Event) => {
    this.sort = (event.target as HTMLSelectElement).value;
  };

  deleteItem = (indexOfItem: number) => {
    this.deleteTodoItemEvent.emit(indexOfItem);
  };
}

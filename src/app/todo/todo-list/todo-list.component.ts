import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  dummyData: any[] = [
    {
      title: 'Breakfast',
      status: 'done',
      date: new Date('Mon Sep 26 2022 15:00:00 GMT+0530 (India Standard Time)'),
    },
    {
      title: 'Exercise',
      status: 'pending',
      date: new Date('Mon Sep 26 2022 15:00:15 GMT+0530 (India Standard Time)'),
    },
    {
      title: 'Study',
      status: 'on-going',
      date: new Date('Mon Sep 26 2022 15:01:08 GMT+0530 (India Standard Time)'),
    },
    {
      title: 'Sleep',
      status: 'pending',
      date: new Date('Mon Sep 26 2022 15:01:10 GMT+0530 (India Standard Time)'),
    },
  ];

  formatDate = (date: Date): string => {
    const dateToFormat = new Date(date);
    return `${dateToFormat.getDate()}/${dateToFormat.getMonth() + 1}, ${dateToFormat.getHours()}:${dateToFormat.getMinutes()}:${dateToFormat.getSeconds()}`;
  }
}

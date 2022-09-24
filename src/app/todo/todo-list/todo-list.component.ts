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
    { title: 'Breakfast', status: 'done', date: '' },
    { title: 'Exercise', status: 'pending', date: '' },
    { title: 'Study', status: 'on-going', date: '' },
    { title: 'Sleep', status: 'pending', date: ''},
  ];
}

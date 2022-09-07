import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  number1: number | undefined;
  number2: number | undefined;
  result: number = 0;

  addTwoNumbers = (): number => {
    if (this.number1 && this.number2) {
      this.result  = this.number1 + this.number2;
    }
    console.log(this.result)
    return this.result;
  };
}

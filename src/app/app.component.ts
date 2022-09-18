import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //    Use click events to get input data

  result: number = 110;
  currentInput: string | undefined;
  currentOperation: string | undefined;

  inputTracker: string[] = ['23', '+', '2', '-', '3', '*', '5'];

  getInputData = (): string => {
    return this.inputTracker.join('');
  };

  setCurrentInput = (value: string) => {};

  setCurrentOperation = (operation: string) => {};

  setResult = (): number => {
    return this.result;
  };
}

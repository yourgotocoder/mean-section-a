import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {

  result: number = 110;
  currentInput: string | undefined;
  currentOperation: string | undefined;

  inputTracker: string[] = ['23', '+', '2', '-', '3', '*', '5'];

  getInputData = (): string => {
    return this.inputTracker.join('');
  };

  //    Use click events to get input data
  setCurrentInput = (value: string) => {};

  setCurrentOperation = (operation: string) => {};

  setResult = (): number => {
    //You can loop over the input tracker array and recompute the result as the values in the array changes
    //String to number, to do mathematical computations
    //Find a method to check if a string can be converted into a number
    return this.result;
  };

}

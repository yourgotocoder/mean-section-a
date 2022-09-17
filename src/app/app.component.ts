import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  result: number = 0;
  inputTracker: string[] = [];
  currentInput: string | undefined;
  currentOperation: string | undefined;

  isLastInputAnOperation = () => {
    switch (this.inputTracker[this.inputTracker.length - 1]) {
      case '+':
        return true;
      case '-':
        return true;
      case '*':
        return true;
      case '/':
        return true;
      case '%':
        return true;
      default:
        return false;
    }
  };

  setCurrentOperation = (operation: string) => {
    this.currentOperation = operation;
    if (this.isLastInputAnOperation()) {
      this.inputTracker[this.inputTracker.length - 1] = operation;
    } else {
      this.inputTracker.push(operation);
    }
    this.currentInput = undefined;
  };

  setCurrentInput = (digit: string) => {
    if (this.currentInput === undefined) {
      this.currentInput = digit;
    } else {
      this.currentInput += digit;
    }
    if (this.inputTracker.length === 0) {
      this.inputTracker.push(this.currentInput);
      this.result += +this.currentInput;
    } else {
      if (this.isLastInputAnOperation()) {
        this.inputTracker.push(this.currentInput);
      } else {
        this.inputTracker[this.inputTracker.length - 1] = this.currentInput;
      }
    }
    let finalResult = this.inputTracker.reduce((prev: number, currentValue, currentIndex) => {
      if (currentIndex === 0) {
        return prev = +currentValue
      }
      console.log(isNaN(+currentValue))
      if (isNaN(+currentValue)) {
        this.currentOperation = currentValue;
      } else {
        switch (this.currentOperation) {
          case '+':
            prev += +currentValue;
            break;
          case '-':
            prev -= +currentValue;
            break;
          case '/':
            prev /= +currentValue;
            break;
          case '*':
            prev *= +currentValue;
            break;
          case '%':
            prev %= +currentValue;
            break;
        }
      }

      return prev;
    }, 0);
    if (this.inputTracker.length < 2) {
      this.result = +this.currentInput
    } else {
      this.result = finalResult;
    }
  };

  getInputData = (): string => {
    return this.inputTracker.join('');
  };
}

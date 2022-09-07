import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hello World';
  buttonDisabled: boolean = false;
  paragraphVisible: boolean = true;
  myInputValue: string = '';

  myListOfNumbers: number[] = [5, 4, 3 ,2, 1];
  myListOfAlphabets: string[] = ['a', 'b', 'c'];

  toggleParagraph = () => {
    this.paragraphVisible = !this.paragraphVisible;
  }
}

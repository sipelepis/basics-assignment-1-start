import { Component } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-success-alert',
  template: `<button mat-stroked-button (click)="openSnackBar()">Show Success Snack-bar</button>`,
  styles: [`button{
    background-color: lightgreen;
  }`]
})
export class SuccessAlertComponent {
  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent);
  }
}
@Component({
  selector: 'success-snack-bar-component-example-snack',
  template: `<span class="example-pizza-party">{{message}}</span>`,
  styles: [
    `
    .example-pizza-party {
      color: green;
    }
  `,
  ],
  standalone: true,
})
export class PizzaPartyComponent {
  message: string = "Success!!";
}
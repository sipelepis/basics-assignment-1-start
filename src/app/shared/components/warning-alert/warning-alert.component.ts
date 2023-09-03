import { Component } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: `[app-warning-alert]`,
  template: `<button mat-stroked-button (click)="openSnackBar()">Show Warning Snack-bar</button>`,
  styles: [`button{
    background-color: red;
  }`]
})
export class WarningAlertComponent {
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
      color: red;
    }
  `,
  ],
  standalone: true,
})
export class PizzaPartyComponent {
  message: string = "Warning!!";
}

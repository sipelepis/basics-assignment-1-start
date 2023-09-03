import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './components/success-alert/success-alert.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [CommonModule,
    MatSnackBarModule,
    MatButtonModule
  ],
  exports: [
    WarningAlertComponent,
    SuccessAlertComponent
  ]
})
export class SharedModule { }

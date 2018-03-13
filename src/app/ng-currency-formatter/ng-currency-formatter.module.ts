import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgCurrencyFormatterComponent} from './ng-currency-formatter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgCurrencyFormatterComponent
  ],
  exports: [
    NgCurrencyFormatterComponent
  ]
})
export class NgCurrencyFormatterModule {
}

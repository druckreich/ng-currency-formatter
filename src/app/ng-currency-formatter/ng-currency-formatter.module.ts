import {CommonModule, CurrencyPipe} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgCurrencyFormatterComponent} from './ng-currency-formatter.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgCurrencyFormatterComponent
  ],
  exports: [
    NgCurrencyFormatterComponent
  ],
  providers: [
    CurrencyPipe
  ]
})
export class NgCurrencyFormatterModule {
}

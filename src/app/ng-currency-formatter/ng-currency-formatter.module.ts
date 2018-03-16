import {CommonModule, CurrencyPipe} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {NgCurrencyConfig} from './ng-currency';
import {NgCurrencyFormatterComponent} from './ng-currency-formatter.component';
import {NgCurrencyValidatorDirective} from './ng-currency-validator.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgCurrencyFormatterComponent,
    NgCurrencyValidatorDirective
  ],
  exports: [
    NgCurrencyFormatterComponent,
    NgCurrencyValidatorDirective
  ],
  providers: [
    CurrencyPipe
  ]
})
export class NgCurrencyFormatterModule {
  static forRoot(config: NgCurrencyConfig = null): ModuleWithProviders {
    if (config == null) {
      config = {message: 'This is not a valid number'};
    }
    return {
      ngModule: NgCurrencyFormatterModule,
      providers: [{provide: 'ngCurrencyConfig', useValue: config}]
    };
  }
}

import {CommonModule, CurrencyPipe} from '@angular/common';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {NgCurrencyConfig} from './ng-currency';
import {NgCurrencyFormatterComponent} from './ng-currency-formatter.component';
import {NgNumberValidatorDirective} from './ng-number-validator.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    NgCurrencyFormatterComponent,
    NgNumberValidatorDirective
  ],
  exports: [
    NgCurrencyFormatterComponent,
    NgNumberValidatorDirective
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

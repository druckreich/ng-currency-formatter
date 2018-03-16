import {Directive, Inject, forwardRef} from '@angular/core';
import {NG_VALIDATORS, FormControl, Validator} from '@angular/forms';
import {NgCurrency, NgCurrencyConfig} from './ng-currency';


@Directive({
  selector: '[ngCurrencyValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NgCurrencyValidatorDirective),
      multi: true
    }
  ]
})
export class NgCurrencyValidatorDirective implements Validator {

  validator: Function;

  constructor(@Inject('ngCurrencyConfig') config: NgCurrencyConfig) {
    this.validator = NgCurrency.validateNumberFactory(config);
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

}

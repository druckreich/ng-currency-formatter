import {Directive, Inject, forwardRef} from '@angular/core';
import {NG_VALIDATORS, FormControl, Validator} from '@angular/forms';
import {NgCurrency, NgCurrencyConfig} from './ng-currency';

function validateNumberFactory(config: NgCurrencyConfig) {
  return (control: FormControl) => {
    const value: any = control.value;
    if (NgCurrency.isValid(value) === true && NgCurrency.isNumeric(value) === false) {
      return {
        ngCurrencyValidator: {
          notANumber: config.message
        }
      };
    }
    return null;
  };
}

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
    this.validator = validateNumberFactory(config);
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

}

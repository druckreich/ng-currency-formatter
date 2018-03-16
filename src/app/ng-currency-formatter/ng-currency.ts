import {FormControl} from '@angular/forms';

export interface NgCurrencyConfig {
  message: string;
}

export class NgCurrency {

  static validateNumberFactory(config: NgCurrencyConfig) {

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

  static isValid(n): boolean {
    return n !== '' && n !== null && n !== undefined;
  }

  static isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}

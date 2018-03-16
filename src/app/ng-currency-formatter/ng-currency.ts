export interface NgCurrencyConfig {
  message: string;
}

export class NgCurrency {
  static isValid(n): boolean {
    return n !== '' && n !== null && n !== undefined;
  }

  static isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
}

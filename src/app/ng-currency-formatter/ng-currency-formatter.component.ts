import {CurrencyPipe} from '@angular/common';
import {Component, ElementRef, forwardRef, HostListener, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {NgCurrency} from './ng-currency';

export const CURRENCY_FORMATTER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgCurrencyFormatterComponent),
  multi: true,
};

@Component({
  selector: '[ngCurrencyFormatter][ngModel]',
  template: '',
  providers: [CURRENCY_FORMATTER_VALUE_ACCESSOR]
})
export class NgCurrencyFormatterComponent implements ControlValueAccessor, OnInit {

  @Input()
  code = 'EUR';

  @Input()
  digit = '1.2';

  dot = '.';
  comma = ',';

  private onChange: any;
  private onTouched: any;

  private value: any;

  constructor(private elementRef: ElementRef, private currencyPipe: CurrencyPipe) {
  }

  ngOnInit() {

  }

  writeValue(obj: number): void {
    this.value = obj;
    this.transformValue();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {

  }

  @HostListener('keyup', ['$event'])
  handleKeyup($event) {
    const value = $event.target.value.replace(this.comma, this.dot);
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  @HostListener('focus')
  handleFocus() {
    this.resetValue();
  }

  @HostListener('blur')
  handleBlur() {
    this.transformValue();
  }

  private transformValue() {
    if (NgCurrency.isValid(this.value) && NgCurrency.isNumeric(this.value)) {
      this.elementRef.nativeElement.value = this.currencyPipe.transform(this.value, this.code, 'symbol', this.digit);
    } else {
      this.resetValue();
    }
  }

  private resetValue() {
    if (NgCurrency.isValid(this.value)) {
      this.elementRef.nativeElement.value = this.value;
    }
  }
}

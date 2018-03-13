import {CurrencyPipe} from '@angular/common';
import {Component, OnInit, forwardRef, ElementRef, HostListener} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const CURRENCY_FORMATTER__VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgCurrencyFormatterComponent),
  multi: true,
};

@Component({
  selector: '[ngCurrencyFormatter]',
  templateUrl: './ng-currency-formatter.component.html',
  styleUrls: ['./ng-currency-formatter.component.css'],
  providers: [CURRENCY_FORMATTER__VALUE_ACCESSOR]
})
export class NgCurrencyFormatterComponent implements ControlValueAccessor, OnInit {

  private onChange: any;
  private onTouched: any;

  private value: number;

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
    const value: number = $event.target.value;
    this.value = value;
    this.onChange(value);
  }

  @HostListener('focus')
  handleFocus() {
    this.resetValue();
  }

  @HostListener('blur')
  handleBlur() {
    this.transformValue();
  }

  transformValue() {
    if (this.value && this.isNumeric(this.value)) {
      this.elementRef.nativeElement.value = this.currencyPipe.transform(this.value);
    } else {
      this.resetValue();
    }
  }

  resetValue() {
    if (this.value) {
      this.elementRef.nativeElement.value = this.value;
    }
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

}

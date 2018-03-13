import { Component, OnInit } from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  selector: '[ngCurrencyFormatter]',
  templateUrl: './ng-currency-formatter.component.html',
  styleUrls: ['./ng-currency-formatter.component.css']
})
export class NgCurrencyFormatterComponent implements ControlValueAccessor, OnInit {

  constructor() { }

  ngOnInit() {
  }

  writeValue(obj: any): void {
    throw new Error("Method not implemented.");
  }

  registerOnChange(fn: any): void {
    throw new Error("Method not implemented.");
  }

  registerOnTouched(fn: any): void {
    throw new Error("Method not implemented.");
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

}

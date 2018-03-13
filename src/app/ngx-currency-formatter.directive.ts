import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[ngxCurrencyFormatter]'
})
export class NgxCurrencyFormatterDirective {

  @HostListener('focus')
  onFocus() {
    console.log('focus')
  }

  constructor() {
  }

}

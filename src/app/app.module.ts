import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import {AppComponent} from './app.component';
import {NgxCurrencyFormatterDirective} from './ngx-currency-formatter.directive';
import { NgCurrencyFormatterComponent } from './ng-currency-formatter/ng-currency-formatter.component';


@NgModule({
  declarations: [
    AppComponent,
    NgxCurrencyFormatterDirective,
    NgCurrencyFormatterComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NgxCurrencyFormatterDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

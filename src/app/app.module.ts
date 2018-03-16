import {registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgCurrencyFormatterModule} from './ng-currency-formatter/ng-currency-formatter.module';

registerLocaleData(localeDe, 'de-DE');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgCurrencyFormatterModule.forRoot(null)
  ],
  exports: [],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-DE'},
    {provide: 'ngCurrencyConfig', useValue: {message: 'Das ist keine gültige Zahl'}},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NgCurrencyFormatterModule} from './ng-currency-formatter/ng-currency-formatter.module';
import {registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';

registerLocaleData(localeDe, 'de-DE');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgCurrencyFormatterModule
  ],
  exports: [],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'de-DE' // 'de-DE' for Germany, 'fr-FR' for France ...
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

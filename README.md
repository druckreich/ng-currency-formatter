# NgxCurrenyFormatter

This library was generated using @angular/cli and ng-packagr.

## How to Use

##### Step 1 - npm install
```` Bash
npm install ng-currency-formatter
````

##### Step 2 - Import in your app module
```` Typescript
import {NgCurrencyFormatter} from 'ng-currency-formatter'

@NgModule({
  imports: [
    NgCurrencyFormatterModule,
  ]
})
````

##### Step 3 - Add as attribute to your component
```` HTML
<input type="text" ngCurrencyFormatter>
````

##### Property Binding
* code - default 'EUR' https://en.wikipedia.org/wiki/ISO_4217

```` HTML
<input type="text" ngCurrencyFormatter [code]="'EUR'">
````

* digit - default '1.2'
```` Code
<input type="text" ngCurrencyFormatter [digit]="'1.4'">
````







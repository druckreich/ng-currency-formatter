# NgxCurrenyFormatter

I made this library because i needed a component (as simple as possible) that just renders the 
value in my input field as if it was piped through the currency pipe.
It does accept the options code and digit which are passed throught to the durrency pipes 
properties.
  

## How to Use

##### Step 1 - npm install
```` Bash
npm install ng-currency-formatter
````

##### Step 2 - Import in your app module
```` Typescript
import {NgCurrencyFormatterModule} from 'ng-currency-formatter'

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
* code - default 'EUR'

```` HTML
<input type="text" ngCurrencyFormatter [code]="'EUR'">
````

* digit - default '1.2'
```` Code
<input type="text" ngCurrencyFormatter [digit]="'1.4'">
````

## Feedback
<p>This is my first library - small but useful - at least for me =D</p>
<p>IF you have any suggestions or issues please drop me a message</p>
 





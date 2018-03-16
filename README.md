# NgxCurrenyFormatter

I made this library because i needed a component (as simple as possible) that just renders the 
value in my input field as if it was piped through the currency pipe.
It does accept the options code and digit which are passed throught to the durrency pipes 
properties.
  

### Demo 
https://druckreich.github.io/ng-currency-formatter

## How to Use

##### How to install dependencies
```` Bash
npm install ng-currency-formatter
````

##### How to import Module
```` Typescript
import {NgCurrencyFormatterModule} from 'ng-currency-formatter'

@NgModule({
  imports: [
    NgCurrencyFormatterModule,
  ]
})
````

##### How to use formatter on input
```` HTML
<input type="text" ngCurrencyFormatter [(ngModel)]="value">
````

##### How to use different locale and digit

```` HTML
<input type="text" ngCurrencyFormatter [code]="'EUR'">
````

```` Code
<input type="text" ngCurrencyFormatter [digit]="'1.4'">
````


##### How to use validator on input
```` HTML
<input type="text" ngCurrencyFormatter [(ngModel)]="value" ngCurrencyValidator>
````

##### How to use custom validator error message
```` Typescript
@NgModule({
  providers: [
    {provide: 'ngCurrencyConfig', useValue: {message: 'I do not like this number, Sir!'}},
  ]
})
````


## Feedback
<p>This is my first library - small but useful - at least for me =D</p>
<p>IF you have any suggestions or issues please drop me a message</p>
 





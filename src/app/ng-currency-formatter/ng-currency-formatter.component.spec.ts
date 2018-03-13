import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCurrencyFormatterComponent } from './ng-currency-formatter.component';

describe('NgCurrencyFormatterComponent', () => {
  let component: NgCurrencyFormatterComponent;
  let fixture: ComponentFixture<NgCurrencyFormatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCurrencyFormatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCurrencyFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

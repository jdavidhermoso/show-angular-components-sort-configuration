import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FiltersPriceComponent} from './filters-price.component';

describe('FiltersPriceComponent', () => {
  let component: FiltersPriceComponent;
  let fixture: ComponentFixture<FiltersPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FiltersLanguageComponent} from './filters-language.component';

describe('FiltersLanguageComponent', () => {
  let component: FiltersLanguageComponent;
  let fixture: ComponentFixture<FiltersLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

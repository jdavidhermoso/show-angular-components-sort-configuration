import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersDifficultComponent } from './filters-difficult.component';

describe('FiltersDifficultComponent', () => {
  let component: FiltersDifficultComponent;
  let fixture: ComponentFixture<FiltersDifficultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersDifficultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersDifficultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

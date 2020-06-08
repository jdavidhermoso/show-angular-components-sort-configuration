import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FiltersDurationComponent} from './filters-duration.component';

describe('FiltersDurationComponent', () => {
  let component: FiltersDurationComponent;
  let fixture: ComponentFixture<FiltersDurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersDurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersDurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

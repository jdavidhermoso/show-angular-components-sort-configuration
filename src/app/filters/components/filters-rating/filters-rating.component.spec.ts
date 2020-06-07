import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersRatingComponent } from './filters-rating.component';

describe('FiltersRatingComponent', () => {
  let component: FiltersRatingComponent;
  let fixture: ComponentFixture<FiltersRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltersRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

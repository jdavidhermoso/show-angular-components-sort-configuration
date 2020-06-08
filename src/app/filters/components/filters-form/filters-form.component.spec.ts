import {FiltersFormComponent} from './filters-form.component';
import {FiltersOrderConfiguration} from '../../models/filters-order-configuration';

describe('FiltersFormComponent', () => {
  let component: FiltersFormComponent;

  beforeEach(() => {
    component = new FiltersFormComponent();
  });

  it('should create', (done) => {
    component.filtersForm.patchValue({
      difficultLevel: 0,
      duration: 0,
      rating: 0,
      language: 0,
      price: 0,
    });
    component.filtersUpdate.subscribe((filtersOrderConfiguration: FiltersOrderConfiguration) => {
      expect(filtersOrderConfiguration).toMatchSnapshot()
    });

    done();
  });
});

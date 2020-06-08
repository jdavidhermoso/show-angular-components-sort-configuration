import {FiltersComponent} from './filters.component';
import {BehaviorSubject, of} from 'rxjs';
import {DemoService} from '../../services';
import {FiltersOrderConfiguration} from '../../models';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  const demoServiceMock = {
    filtersOrderConfigurationBehaviorSubject: new BehaviorSubject({
      price: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
      difficultLevel: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
      language: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
      rating: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
      duration: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION
    }),
    updateFilterOrder: jest.fn()
  };

  const filtersServiceMock = {
    getFiltersOrderConfiguration: jest.fn(() => {
      return of({
        price: 3,
        difficultLevel: 4,
        language: 2,
        rating: 1,
        duration: 1
      });
    })
  };

  it('should get filtersOrderConfiguration', (done) => {
    component = new FiltersComponent(filtersServiceMock as any, demoServiceMock as any);
    component.filtersOrderConfiguration$.subscribe((filtersOrderConfiguration: FiltersOrderConfiguration) => {
      expect(filtersOrderConfiguration).toMatchSnapshot();
      done();
    });
  });

  it('should call demoService to update filters configuration', () => {
    component = new FiltersComponent(filtersServiceMock as any, demoServiceMock as any);

    component.updateFiltersOrder({
      price: 3,
      difficultLevel: 4,
      language: 2,
      rating: 1,
      duration: 1
    });

    expect(demoServiceMock.updateFilterOrder).toHaveBeenCalled();
  });
});

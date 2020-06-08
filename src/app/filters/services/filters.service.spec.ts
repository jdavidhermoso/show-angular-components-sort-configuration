import {BehaviorSubject} from 'rxjs';
import {DemoService} from './demo.service';
import {FiltersService} from './filters.service';
import {FiltersOrderConfiguration} from '../models';
import {skip} from 'rxjs/operators';

describe('FiltersService', () => {
  const demoServiceMock = {
    filtersOrderConfigurationBehaviorSubject: new BehaviorSubject({
      price: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
      difficultLevel: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
      language: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
      rating: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION,
      duration: DemoService.DEFAULT_FILTER_ORDER_CONFIGURATION
    })
  };

  let service: FiltersService;

  beforeEach(() => {
    service = new FiltersService(demoServiceMock as any);
  });

  it('Should return filters order configurations in negative', (done) => {
    service.getFiltersOrderConfiguration()
      .pipe(
        skip(1)
      )
      .subscribe((filtersOrderConfiguration: FiltersOrderConfiguration) => {
        expect(filtersOrderConfiguration).toMatchSnapshot();
        done();
      });

    demoServiceMock.filtersOrderConfigurationBehaviorSubject.next({
      price: 1,
      difficultLevel: 0,
      language: 2,
      rating: 1,
      duration: 3
    });
  });
});

import { TestBed } from '@angular/core/testing';

import { RoutingGaurdServiceService } from './routing-gaurd-service.service';

describe('RoutingGaurdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutingGaurdServiceService = TestBed.get(RoutingGaurdServiceService);
    expect(service).toBeTruthy();
  });
});

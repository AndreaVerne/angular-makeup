import { TestBed } from '@angular/core/testing';

import { MysticCartService } from './mystic-cart.service';

describe('MysticCartService', () => {
  let service: MysticCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysticCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

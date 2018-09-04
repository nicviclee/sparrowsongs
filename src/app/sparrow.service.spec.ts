import { TestBed, inject } from '@angular/core/testing';

import { SparrowService } from './sparrow.service';

describe('SparrowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SparrowService]
    });
  });

  it('should be created', inject([SparrowService], (service: SparrowService) => {
    expect(service).toBeTruthy();
  }));
});

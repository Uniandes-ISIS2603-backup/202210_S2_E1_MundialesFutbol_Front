/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MundialService } from './Mundial.service';

describe('Service: Mundial', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MundialService]
    });
  });

  it('should ...', inject([MundialService], (service: MundialService) => {
    expect(service).toBeTruthy();
  }));
});

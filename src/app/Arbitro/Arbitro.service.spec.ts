/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArbitroService } from './Arbitro.service';

describe('Service: Arbitro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArbitroService]
    });
  });

  it('should ...', inject([ArbitroService], (service: ArbitroService) => {
    expect(service).toBeTruthy();
  }));
});

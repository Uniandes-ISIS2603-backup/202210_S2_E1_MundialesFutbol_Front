/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArbitroService } from './Arbitro.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Arbitro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArbitroService]
    });
  });

  it('should ...', inject([ArbitroService], (service: ArbitroService) => {
    expect(service).toBeTruthy();
  }));
});

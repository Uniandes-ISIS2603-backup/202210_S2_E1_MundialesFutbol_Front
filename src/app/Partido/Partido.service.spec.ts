/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { PartidoService } from './Partido.service';

describe('Service: Partido', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PartidoService]
    });
  });


  it('should ...', inject([PartidoService], (service: PartidoService) => {
    expect(service).toBeTruthy();
  }));
});

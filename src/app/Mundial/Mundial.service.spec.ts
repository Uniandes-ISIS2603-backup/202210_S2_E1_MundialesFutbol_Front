/* tslint:disable:no-unused-variable */
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { MundialService } from './Mundial.service';

describe('Service: Mundial', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MundialService]
    });
  });


  it('should ...', inject([MundialService], (service: MundialService) => {
    expect(service).toBeTruthy();
  }));
});

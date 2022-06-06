/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
/*import { faker } from '@faker-js/faker';*/

import { GolesService } from './Goles.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service: Goles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GolesService]
    });
  });


  it('should ...', inject([GolesService], (service: GolesService) => {
    expect(service).toBeTruthy();
  }));
});


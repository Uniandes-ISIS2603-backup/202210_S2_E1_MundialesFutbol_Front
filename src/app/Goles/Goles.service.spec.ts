/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GolesService } from './Goles.service';

describe('Service: Goles', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GolesService]
    });
  });

  it('should ...', inject([GolesService], (service: GolesService) => {
    expect(service).toBeTruthy();
  }));
});

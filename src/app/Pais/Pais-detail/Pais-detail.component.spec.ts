/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaisDetailComponent } from './Pais-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaisService } from '../Pais.service';
import { PaisDetail } from '../PaisDetail';
import faker from '@faker-js/faker';
import { Pais } from 'src/app/Pais/Pais';

describe('PaisDetailComponent', () => {
  let component: PaisDetailComponent;
  let fixture: ComponentFixture<PaisDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PaisDetailComponent ],
      providers: [PaisService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisDetailComponent);
    component = fixture.componentInstance;

    component.paisDetail= new PaisDetail(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      [],[],[]
      );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

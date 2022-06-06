/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntrenadorDetailComponent } from './Entrenador-detail.component';
import faker from '@faker-js/faker';
import { EntrenadorDetail } from '../EntrenadorDetail';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EntrenadorService } from '../Entrenador.service';

describe('EntrenadorDetailComponent', () => {
  let component: EntrenadorDetailComponent;
  let fixture: ComponentFixture<EntrenadorDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ EntrenadorDetailComponent ],
      providers: [ EntrenadorService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorDetailComponent);
    component = fixture.componentInstance;

    component.entrenadorDetail = new EntrenadorDetail(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.name.firstName(),
      faker.name.firstName(),
      []
      );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntrenadorDetailComponent } from './Entrenador-detail.component';
import faker from '@faker-js/faker';
import { Equipo } from 'src/app/Equipo/Equipo';
import { EntrenadorDetail } from '../EntrenadorDetail';

describe('EntrenadorDetailComponent', () => {
  let component: EntrenadorDetailComponent;
  let fixture: ComponentFixture<EntrenadorDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrenadorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorDetailComponent);
    component = fixture.componentInstance;

    component.Entrenador = new EntrenadorDetail(
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

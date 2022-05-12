/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GolesListComponent } from './Goles-list.component';
import { Goles } from '../Goles.ts';
import faker from '@faker-js/faker';
import { Partido } from 'src/app/Partido/Partido';
import { Jugador } from 'src/app/Jugador/Jugador';
import { GolesService } from '../Goles.service';
import { HttpClientModule } from '@angular/common/http';

describe('GolesListComponent', () => {
  let component: GolesListComponent;
  let fixture: ComponentFixture<GolesListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ GolesListComponent ],
      providers: [GolesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolesListComponent);
    component = fixture.componentInstance;
    let partido = new Partido(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.date.past(),
      faker.name.firstName(),
      faker.name.firstName()
    )
    let jugador = new Jugador(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.name.firstName(),
      faker.date.past(),
      faker.name.firstName(),
      faker.name.firstName(),
      faker.name.firstName()
    )

    component.goles = [
      new Goles(
        faker.datatype.number(),
        faker.name.firstName(),
        jugador,
        partido
        )
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

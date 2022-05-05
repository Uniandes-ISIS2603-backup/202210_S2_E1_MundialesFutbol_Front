/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
/*import { faker } from '@faker-js/faker';*/

import { GolesListComponent } from './Goles-list/Goles-list.component';
import { HttpClientModule } from '@angular/common/http';
import { Jugador } from '../Jugador/Jugador';
import { Partido } from '../Partido/Partido';
import { Goles } from './Goles.ts';
import { GolesService } from './Goles.service';


describe('GolListComponent', () => {

  let component: GolesListComponent;
  let fixture: ComponentFixture<GolesListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
     declarations: [ GolesListComponent],
     providers: [GolesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolesListComponent);
    component = fixture.componentInstance;

    /*
    let partido = new Partido(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.datatype.Date(),
      faker.lorem.sentence(),
      faker.lorem.sentence()
    );*/

    /*
    let jugador = new Jugador(
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.datatype.Date(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
    );*/

    /*
    component.goles = [
      new Goles(
        faker.datatype.number(),
        faker.lorem.sentence(),
        jugador,
        partido
      ),
    ];*/
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  /*
  it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JugadorDetailComponent } from './Jugadores-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { JugadorService } from '../Jugador.service';
import { JugadorDetail } from '../JugadorDetail';
import faker from '@faker-js/faker';

describe('JugadorDetailComponent', () => {
let component: JugadorDetailComponent;
let fixture: ComponentFixture<JugadorDetailComponent>;
let debug: DebugElement;

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientModule],
    declarations: [ JugadorDetailComponent ],
    providers: [JugadorService]
  })
  .compileComponents();
}));

beforeEach(() => {
  fixture = TestBed.createComponent(JugadorDetailComponent);
  component = fixture.componentInstance;
  component.jugadorDetail =
    new JugadorDetail(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.datatype.number(),
      faker.datatype.number(),
      faker.name.firstName(),
      faker.date.past(),
      faker.name.firstName(),
      faker.name.firstName(),
      faker.name.firstName(),
      [],[]
      );
  fixture.detectChanges();
  debug = fixture.debugElement;
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JugadorListComponent } from './Jugadores-list.component';
import { HttpClientModule } from '@angular/common/http';
import { JugadorService } from '../Jugador.service';
import { JugadorDetail } from '../JugadorDetail';
import faker from '@faker-js/faker';

describe('PartidoListComponent', () => {
let component: JugadorListComponent;
let fixture: ComponentFixture<JugadorListComponent>;
let debug: DebugElement;

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientModule],
    declarations: [ JugadorListComponent ],
    providers: [JugadorService]
  })
  .compileComponents();
}));

beforeEach(() => {
  fixture = TestBed.createComponent(JugadorListComponent);
  component = fixture.componentInstance;
  component.Jugador = [
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
      )
  ];
  fixture.detectChanges();
  debug = fixture.debugElement;
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});

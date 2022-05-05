/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JugadorListComponent } from './Jugadores-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('PartidoListComponent', () => {
let component: JugadorListComponent;
let fixture: ComponentFixture<JugadorListComponent>;

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports: [HttpClientModule],
    declarations: [ JugadorListComponent ]
  })
  .compileComponents();
}));

beforeEach(() => {
  fixture = TestBed.createComponent(JugadorListComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});

it('should create', () => {
  expect(component).toBeTruthy();
});
});

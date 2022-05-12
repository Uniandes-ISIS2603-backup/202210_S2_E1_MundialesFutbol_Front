/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EntrenadorListComponent } from './Entrenador-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EntrenadorService } from '../Entrenador.service';
import { EntrenadorDetail } from '../EntrenadorDetail';
import faker from '@faker-js/faker';

describe('EntrenadorListComponent', () => {
  let component: EntrenadorListComponent;
  let fixture: ComponentFixture<EntrenadorListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ EntrenadorListComponent ],
      providers: [EntrenadorService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorListComponent);
    component = fixture.componentInstance;
    new EntrenadorDetail(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.name.firstName(),
      faker.name.firstName(),
      []
    )

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

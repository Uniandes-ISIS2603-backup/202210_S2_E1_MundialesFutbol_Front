/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PartidoListComponent } from './Partido-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PartidoService } from '../Partido.service';
import { PartidoDetail } from '../PartidoDetail';
import faker from '@faker-js/faker';

describe('PartidoListComponent', () => {
  let component: PartidoListComponent;
  let fixture: ComponentFixture<PartidoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ PartidoListComponent ],
      providers: [PartidoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoListComponent);
    component = fixture.componentInstance;
    component.partidos = [
      new PartidoDetail(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.date.past(),
        faker.name.firstName(),
        faker.name.firstName(),
        [],[],[]
        )
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PartidoDetailComponent } from './Partido-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PartidoService } from '../Partido.service';
import { PartidoDetail } from '../PartidoDetail';
import faker from '@faker-js/faker';
import { RouterTestingModule } from '@angular/router/testing';

describe('PartidoDetailComponent', () => {
  let component: PartidoDetailComponent;
  let fixture: ComponentFixture<PartidoDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ PartidoDetailComponent ],
      providers: [ PartidoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoDetailComponent);
    component = fixture.componentInstance;
    component.partidoDetail =
      new PartidoDetail(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.date.past(),
        faker.name.firstName(),
        faker.name.firstName(),
        [],[],[]
        );
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

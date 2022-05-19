/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArbitroDetailComponent } from './Arbitro-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ArbitroService } from '../Arbitro.service';
import { ArbitroDetail } from '../ArbitroDetail';
import faker from '@faker-js/faker';
import { Pais } from 'src/app/Pais/Pais';
import { RouterTestingModule } from '@angular/router/testing';

describe('ArbitroDetailComponent', () => {
  let component: ArbitroDetailComponent;
  let fixture: ComponentFixture<ArbitroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ ArbitroDetailComponent ],
      providers: [ ArbitroService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitroDetailComponent);
    component = fixture.componentInstance;
    let pais = new Pais(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.image.imageUrl()
    );
    component.arbitroDetail= new ArbitroDetail(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.image.imageUrl(),
      pais,
      [],[],[]
      );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

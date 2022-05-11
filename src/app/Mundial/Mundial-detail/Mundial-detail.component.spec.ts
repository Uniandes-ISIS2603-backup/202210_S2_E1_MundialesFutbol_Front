/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MundialDetailComponent } from './Mundial-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MundialService } from '../Mundial.service';
import { MundialDetail } from '../MundialDetail';
import faker from '@faker-js/faker';

describe('MundialDetailComponent', () => {
  let component: MundialDetailComponent;
  let fixture: ComponentFixture<MundialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ MundialDetailComponent ],
      providers: [MundialService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MundialDetailComponent);
    component = fixture.componentInstance;
    component.mundial = new MundialDetail(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.datatype.number(),
      faker.date.past(),
      faker.image.imageUrl(),
      faker.name.firstName(),
      [],[],[],[]
      );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MundialListComponent } from './Mundial-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MundialService } from '../Mundial.service';
import { MundialDetail } from '../MundialDetail';
import faker from '@faker-js/faker';

describe('MundialListComponent', () => {
  let component: MundialListComponent;
  let fixture: ComponentFixture<MundialListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      declarations: [ MundialListComponent ],
      providers: [MundialService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MundialListComponent);
    component = fixture.componentInstance;
    component.mundiales = [
      new MundialDetail(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.datatype.number(),
        faker.date.past(),
        faker.image.imageUrl(),
        faker.name.firstName(),
        [],[],[],[]
        )
    ];
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have an img element", () => {
    expect(debug.query(By.css('img')).attributes['alt']).toEqual(
      component.mundiales[0].nombreMascota
    );
    });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArbitroListComponent } from './Arbitro-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ArbitroDetail } from '../ArbitroDetail';
import faker from '@faker-js/faker';
import { Pais } from 'src/app/Pais/Pais';
import { ArbitroService } from '../Arbitro.service';

describe('ArbitroListComponent', () => {
 let component: ArbitroListComponent;
 let fixture: ComponentFixture<ArbitroListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ ArbitroListComponent ],
     providers: [ArbitroService]
   })
   .compileComponents();
 }));

 beforeEach(() => {
  fixture = TestBed.createComponent(ArbitroListComponent);
  component = fixture.componentInstance;
  let pais = new Pais(
    faker.datatype.number(),
    faker.name.firstName(),
    faker.image.imageUrl()
  );
  component.arbitros = [
    new ArbitroDetail(
      faker.datatype.number(),
      faker.name.firstName(),
      faker.image.imageUrl(),
      pais,
      [],[],[]
      )
  ];
  fixture.detectChanges();
  debug = fixture.debugElement;
});

it("should have an img element", () => {
  expect(debug.query(By.css('img')).attributes['alt']).toEqual(
    component.arbitros[0].nombre
  );
  });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

});

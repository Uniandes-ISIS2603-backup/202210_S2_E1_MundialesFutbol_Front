import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PaisListComponent } from './Pais-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisService } from '../Pais.service';
import { PaisDetail } from '../PaisDetail';

describe('PaisListComponent', () => {
 let component: PaisListComponent;
 let fixture: ComponentFixture<PaisListComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ PaisListComponent ],
     providers: [ PaisService ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(PaisListComponent);
   component = fixture.componentInstance;

   component.paises = [
     new PaisDetail(
       faker.datatype.number(),
       faker.lorem.sentence(),
       faker.image.imageUrl(),
       [],[],[]
     ),
   ];
   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it('should have an img element ', () => {
   expect(debug.query(By.css('img')).attributes['alt']).toEqual(
     component.paises[0].nombre
   );
 });

});

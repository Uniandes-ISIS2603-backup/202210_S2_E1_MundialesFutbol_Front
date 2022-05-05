/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ArbitroListComponent } from './Arbitro-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('BookListComponent', () => {
 let component: ArbitroListComponent;
 let fixture: ComponentFixture<ArbitroListComponent>;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ ArbitroListComponent ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(ArbitroListComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });
});

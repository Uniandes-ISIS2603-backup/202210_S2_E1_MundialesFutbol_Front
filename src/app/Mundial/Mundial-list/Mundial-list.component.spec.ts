/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MundialListComponent } from './Mundial-list.component';

describe('MundialListComponent', () => {
  let component: MundialListComponent;
  let fixture: ComponentFixture<MundialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MundialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MundialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

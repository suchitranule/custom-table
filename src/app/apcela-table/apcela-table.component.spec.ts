/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApcelaTableComponent } from './apcela-table.component';

describe('ApcelaTableComponent', () => {
  let component: ApcelaTableComponent;
  let fixture: ComponentFixture<ApcelaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApcelaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApcelaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

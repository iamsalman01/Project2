import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignmen10Component } from './assignmen10.component';

describe('Assignmen10Component', () => {
  let component: Assignmen10Component;
  let fixture: ComponentFixture<Assignmen10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assignmen10Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Assignmen10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

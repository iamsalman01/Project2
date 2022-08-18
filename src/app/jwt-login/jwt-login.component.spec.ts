import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JWTLoginComponent } from './jwt-login.component';

describe('JWTLoginComponent', () => {
  let component: JWTLoginComponent;
  let fixture: ComponentFixture<JWTLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JWTLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JWTLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Negocio4Component } from './negocio4.component';

describe('Negocio4Component', () => {
  let component: Negocio4Component;
  let fixture: ComponentFixture<Negocio4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Negocio4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Negocio4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

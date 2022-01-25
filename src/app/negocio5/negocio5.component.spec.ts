import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Negocio5Component } from './negocio5.component';

describe('Negocio5Component', () => {
  let component: Negocio5Component;
  let fixture: ComponentFixture<Negocio5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Negocio5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Negocio5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

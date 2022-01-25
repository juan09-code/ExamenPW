import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Negocio1Component } from './negocio1.component';

describe('Negocio1Component', () => {
  let component: Negocio1Component;
  let fixture: ComponentFixture<Negocio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Negocio1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Negocio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

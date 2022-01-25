import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Negocio2Component } from './negocio2.component';

describe('Negocio2Component', () => {
  let component: Negocio2Component;
  let fixture: ComponentFixture<Negocio2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Negocio2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Negocio2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

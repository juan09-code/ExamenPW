import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Negocio3Component } from './negocio3.component';

describe('Negocio3Component', () => {
  let component: Negocio3Component;
  let fixture: ComponentFixture<Negocio3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Negocio3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Negocio3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

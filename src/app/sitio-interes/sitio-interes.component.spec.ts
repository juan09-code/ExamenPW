import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioInteresComponent } from './sitio-interes.component';

describe('SitioInteresComponent', () => {
  let component: SitioInteresComponent;
  let fixture: ComponentFixture<SitioInteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitioInteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitioInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

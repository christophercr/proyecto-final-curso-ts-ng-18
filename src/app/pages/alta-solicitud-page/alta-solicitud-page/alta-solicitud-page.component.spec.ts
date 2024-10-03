import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaSolicitudPageComponent } from './alta-solicitud-page.component';

describe('AltaSolicitudPageComponent', () => {
  let component: AltaSolicitudPageComponent;
  let fixture: ComponentFixture<AltaSolicitudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaSolicitudPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaSolicitudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

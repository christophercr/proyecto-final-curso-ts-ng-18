import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaSolicitudComponent } from './alta-solicitud.component';

describe('AltaSolicitudComponent', () => {
  let component: AltaSolicitudComponent;
  let fixture: ComponentFixture<AltaSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaSolicitudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

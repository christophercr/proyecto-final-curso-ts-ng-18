import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudListadoComponent } from './solicitud-listado.component';

describe('SolicitudListadoComponent', () => {
  let component: SolicitudListadoComponent;
  let fixture: ComponentFixture<SolicitudListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudListadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

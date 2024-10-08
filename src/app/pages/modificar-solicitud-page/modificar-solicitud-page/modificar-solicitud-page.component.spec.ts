import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSolicitudPageComponent } from './modificar-solicitud-page.component';

describe('ModificarSolicitudPageComponent', () => {
  let component: ModificarSolicitudPageComponent;
  let fixture: ComponentFixture<ModificarSolicitudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarSolicitudPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarSolicitudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

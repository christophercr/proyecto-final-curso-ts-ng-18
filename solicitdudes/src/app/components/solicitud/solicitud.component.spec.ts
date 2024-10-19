import { ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { SolicitudComponent } from './solicitud.component';
import { provideRouter } from '@angular/router';
import { SolicitudService } from '../../core/services/solicitud.service';

describe('SolicitudComponent', () => {
  let component: SolicitudComponent;
  let fixture: ComponentFixture<SolicitudComponent>;
  let solicitudesService: jasmine.SpyObj<SolicitudService>;

  beforeEach(async () => {
    const solicitudesServiceMock = jasmine.createSpyObj('solicitudesService', ['getSolicitudes']);
    await TestBed.configureTestingModule({
      imports: [SolicitudComponent],
      providers: [provideRouter([]),{
        provide: SolicitudService,
        useValue: solicitudesServiceMock,
      },],
    })
    .compileComponents();

    solicitudesService = TestBed.inject(SolicitudService) as jasmine.SpyObj<SolicitudService>;
    fixture = TestBed.createComponent(SolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Campo del formulario', () => {
    describe('Validaciones', () => {
      it('debe de mostrar un mensaje de error si no se proporciona nombre del solicitante', () => {
        const compiledHtml = fixture.nativeElement as HTMLElement;
        const inputBox = compiledHtml.querySelector('#nombre') as HTMLInputElement;
        inputBox.value = 'David';
        inputBox.dispatchEvent(new Event('input')); //HTML
//        inputBox.dispatchEvent()
        fixture.detectChanges();
        inputBox.value = '';
        inputBox.dispatchEvent(new Event('input')); //HTML
        fixture.detectChanges();
        const divErrores = compiledHtml.querySelector('#errores-validacion-nombre-req') as HTMLDivElement;
        expect(divErrores.innerHTML).toBe('El campo nombre es requerido.');
      });
    });
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSolicitudesComponent } from './listado-solicitudes.component';
import { Solicitud } from '../../models/solicitud.model';
import { Persona } from '../../models/persona.model';
import { Router } from '@angular/router';
import { appConfig } from '../../app.config';

describe('ListadoSolicitudesComponent', () => {
  let component: ListadoSolicitudesComponent;
  let fixture: ComponentFixture<ListadoSolicitudesComponent>;
  let router: Router;

  beforeEach(async () => {
    const dummyCollection:Solicitud[] = [
      new Solicitud('567',new Persona('Lola', 'lola@gmail.com', new Date(1975, 9, 30)), 
        'Analista',new Date(),'En espera',8)
    ]; 

    await TestBed.configureTestingModule({
      ...appConfig,
      imports: [ListadoSolicitudesComponent],
      providers: [
        ...appConfig.providers
      ]
    })
    .compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(ListadoSolicitudesComponent);
    component = fixture.componentInstance;
    component.solicitudes = dummyCollection;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Output:', () => {
    describe('solicitudBorrada', () =>{
      it('comprobar que emite al borrar una solicitud', () => {
        const spy = spyOn(component.solicitudBorrada, 'emit');
        const compiledHtml = fixture.nativeElement as HTMLElement;
        const borrarSolicitudEnlace = compiledHtml.querySelector('[data-test="borrar-solicitud"]') as HTMLButtonElement;
        borrarSolicitudEnlace.click();

        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Input:', () => {
    describe('solicitudes', () =>{
      it('comprobar que se carga la tabla', () => {
        const spy = spyOn(component.solicitudBorrada, 'emit');
        const compiledHtml = fixture.nativeElement as HTMLElement;
        const tablaSolicitudes = compiledHtml.querySelector('[data-test="tabla-solicitudes"]') as HTMLTableElement;

        //Se esperan dos en el body de la tabla, la cabecera y un fila porque hay una solicitud
        expect(tablaSolicitudes.tBodies[0].childNodes.length).toBe(2);
      });
    });
  });

  fdescribe('Tabla:', () => {
    describe('Columna edad', () =>{
      it('comprobar que se muestra la edad calculada desde la fecha de nacimiento', () => {
        const compiledHtml = fixture.nativeElement as HTMLElement;
        const tablaSolicitudes = compiledHtml.querySelector('[data-test="tabla-solicitudes"]') as HTMLTableElement;

        const anioEsperado = new Date().getFullYear() - new Date(1975, 9, 30).getFullYear();//Misma fecha que el objeto
        expect(tablaSolicitudes.tBodies[0].childNodes[0].childNodes[2].textContent).toBe(anioEsperado.toString());
      });
    });
  });

});

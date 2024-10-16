import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudNuevaComponent } from './solicitud-nueva.component';
import { SolicitudService } from '../../services/solicitud.service';
import { Solicitud } from '../../models/solicitud.model';
import { signal } from '@angular/core';

xdescribe('SolicitudNuevaComponent', () => {
  let component: SolicitudNuevaComponent;
  let fixture: ComponentFixture<SolicitudNuevaComponent>;
  let solicitudService: jasmine.SpyObj<SolicitudService>;
  //const solicitudCollectionsSignalStub = signal(<Map<string, <Solicitud>>(new Map());

  beforeEach(async () => {
    const dummySolicitudes:Solicitud[] = [
      new Solicitud('Sergio','sergio@gmail.com', 34, 14, 'Programador', new Date(2022, 7, 18, 0, 0, 0), 'En Espera')
    ]; 
    //bookCollectionsSignalStub.set(dummySolicitudes);
    const bookServiceMock = jasmine.createSpyObj('SolicitudService', ['createBook'], {
    //  bookCollectionsSignal: bookCollectionsSignalStub,
    });
    await TestBed.configureTestingModule({
      imports: [SolicitudNuevaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

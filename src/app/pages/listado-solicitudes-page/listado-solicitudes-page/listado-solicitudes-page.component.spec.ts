import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSolicitudesPageComponent } from './listado-solicitudes-page.component';
import { SolicitudService } from '../../../services/solicitud.service';

describe('ListadoSolicitudesPageComponent', () => {
  let component: ListadoSolicitudesPageComponent;
  let fixture: ComponentFixture<ListadoSolicitudesPageComponent>;
  let solicitudService: jasmine.SpyObj<SolicitudService>;

  beforeEach(async () => {
    const solicitudServiceMock = jasmine.createSpyObj('SolicitudService', ['consultarSolicitudes']); 

    await TestBed.configureTestingModule({
      imports: [ListadoSolicitudesPageComponent],
      providers:[
        {
          provide: SolicitudService,
          useValue: solicitudServiceMock,
        }
      ],
    })
    .compileComponents();

    solicitudService = TestBed.inject(SolicitudService) as jasmine.SpyObj<SolicitudService>;
    fixture = TestBed.createComponent(ListadoSolicitudesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

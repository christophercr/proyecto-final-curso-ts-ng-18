import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudesComponent } from './solicitudes.component';
import { provideRouter } from '@angular/router';
import { SolicitudService } from '../../core/services/solicitud.service';
import { of } from 'rxjs';
import { Solicitud } from '../../core/interfaces/solicitud';
import { HttpClient } from '@angular/common/http';

fdescribe('SolicitudesComponent', () => {
  let component: SolicitudesComponent;
  let fixture: ComponentFixture<SolicitudesComponent>;
  let solicitudesService: jasmine.SpyObj<SolicitudService>;
  let httpService: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    const solicitudesServiceMock = jasmine.createSpyObj('solicitudesService', ['getSolicitudes', 'getSolicitudPorNombre']);
    const httpMock = jasmine.createSpyObj('http', ['get']);
    await TestBed.configureTestingModule({
      imports: [SolicitudesComponent],
      providers: [provideRouter([]),{
        provide: SolicitudService,
        useClass: SolicitudService,
      },{
        provide: HttpClient,
        useValue: httpMock,
      },],
    })
    .compileComponents();

    httpService = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
    fixture = TestBed.createComponent(SolicitudesComponent);
    component = fixture.componentInstance;
    solicitudesService = TestBed.inject(SolicitudService) as jasmine.SpyObj<SolicitudService>;
    const solicitud = new Solicitud("David", "davidof1977@hotmail.com","18-07-1977",20,"Architect");
    let solicitudes : Solicitud[]= [];
    solicitudes.push(solicitud);
    httpService.get.and.returnValue(of(solicitudes));
    fixture.detectChanges();
  });
  it('Valor de la primera celda de la tabla', () => {
    const html = fixture.nativeElement as HTMLElement;
    const td = html.querySelector('#itemNombre') as HTMLTableCellElement;
    expect(td.innerHTML).toBe('David');
  });

  it('Filtrar por nombre', (done: DoneFn) => {
    const html = fixture.nativeElement as HTMLElement;
    const input = html.querySelector('#nombre') as HTMLInputElement;
    input.value ='Fe';
    const solicitud = new Solicitud("David", "davidof1977@hotmail.com","18-07-1977",20,"Architect");
    let solicitudes : Solicitud[]= [];
    solicitudes.push(solicitud);
    httpService.get.and.returnValue(of(solicitudes));
    input.dispatchEvent(new Event('input'))
    input.dispatchEvent(new Event('keyup'))

    fixture.detectChanges();
    const tdNotFounf = html.querySelector('#itemNombre') as HTMLTableCellElement;
    expect(tdNotFounf).toBeNull();


    input.value ='Da';
    input.dispatchEvent(new Event('input'))
    input.dispatchEvent(new Event('keyup'))
    fixture.detectChanges();
    const td = html.querySelector('#itemNombre') as HTMLTableCellElement;

    expect(td.innerHTML).toBe('David');

    done();

  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaInicioComponent } from './pagina-inicio.component';
import { RouterTestingHarness } from '@angular/router/testing';
import { Router } from '@angular/router';
import { SolicitudService } from '../../services/solicitud.service';
import { appConfig } from '../../app.config';
import { of } from 'rxjs';


xdescribe('PaginaInicioComponent', () => {
  let component: PaginaInicioComponent;
  let fixture: ComponentFixture<PaginaInicioComponent>;
  let harness: RouterTestingHarness;
  let router: Router;
  
  let solicitudService: jasmine.SpyObj<SolicitudService>;

  beforeEach(async () => {
    const SolicitudServiceMock = jasmine.createSpyObj('SolicitudService', ['recargarSolicitudes'], {
      
    });
    await TestBed.configureTestingModule({
      ...appConfig,
      imports: [PaginaInicioComponent],
            
      providers: [
        ...appConfig.providers, // cogemos los providers que ya teníamos para no perderlos! (router + definición de rutas)
        {
          provide: SolicitudService,
          useValue: SolicitudServiceMock,
        },
      ],
    })
    .compileComponents();

    router = TestBed.inject(Router);
    solicitudService = TestBed.inject(SolicitudService) as jasmine.SpyObj<SolicitudService>;
    solicitudService.recargarSolicitudes.and.returnValue();    
    harness = await RouterTestingHarness.create();
  });

  describe('enrutado', () => {
    it('debe crearse cuando el router navegue a la ruta principal', async () => {
      component = await harness.navigateByUrl('/', PaginaInicioComponent);

      expect(component).toBeTruthy();
      expect(component instanceof PaginaInicioComponent).toBeTrue();
      expect(router.url).toBe('/');

      const html = harness.routeNativeElement as HTMLElement;
      const homePageTitle = html.querySelector<HTMLHeadingElement>('h1');
      expect(homePageTitle?.textContent).toBe('Control de solicitudes');
    });

    it('debe destruirse cuando el router navegue a otra ruta distinta', async () => {
      let finalComponent: PaginaInicioComponent  = await harness.navigateByUrl('/', PaginaInicioComponent);
      expect(finalComponent instanceof PaginaInicioComponent).toBeTrue();

      finalComponent = await harness.navigateByUrl('solicitudes', PaginaInicioComponent);

      expect(finalComponent instanceof PaginaInicioComponent).toBeFalse();      
      expect(router.url).toBe('/solicitud-listado'); 
    });
  });
});

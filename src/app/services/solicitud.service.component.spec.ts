import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudService } from './solicitud.service.component';



describe('SolicitudServiceComponent', () => {
  let component: SolicitudService;
  let fixture: ComponentFixture<SolicitudService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

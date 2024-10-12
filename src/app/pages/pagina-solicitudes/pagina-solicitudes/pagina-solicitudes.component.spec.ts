import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaSolicitudesComponent } from './pagina-solicitudes.component';

describe('PaginaSolicitudesComponent', () => {
  let component: PaginaSolicitudesComponent;
  let fixture: ComponentFixture<PaginaSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaSolicitudesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSolicitudesPageComponent } from './listado-solicitudes-page.component';

describe('ListadoSolicitudesPageComponent', () => {
  let component: ListadoSolicitudesPageComponent;
  let fixture: ComponentFixture<ListadoSolicitudesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoSolicitudesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoSolicitudesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSolicitudesComponent } from './listado-solicitudes.component';

xdescribe('ListadoSolicitudesComponent', () => {
  let component: ListadoSolicitudesComponent;
  let fixture: ComponentFixture<ListadoSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoSolicitudesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

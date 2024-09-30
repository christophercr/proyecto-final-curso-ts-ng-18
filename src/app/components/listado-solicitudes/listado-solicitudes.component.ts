import { Component, Output } from '@angular/core';
import { Solicitud } from '../../models/solicitud';
import { Persona } from '../../models/persona';
import { EstadoSolicitud } from '../../constants/estado-solicitud';
import { EdadDesdeFechaNacimientoPipe } from '../../pipes/edad-desde-fecha-nacimiento.pipe';

@Component({
  selector: 'app-listado-solicitudes',
  standalone: true,
  imports: [EdadDesdeFechaNacimientoPipe],
  templateUrl: './listado-solicitudes.component.html',
  styleUrl: './listado-solicitudes.component.css'
})
export class ListadoSolicitudesComponent {
  solicitudes: Solicitud[] = [];

  ngOnInit(){
    //Carga inicial ficticia
    let solicitud1 = new Solicitud(
      new Persona('Alberto M.', 'alberto@gmail.com', new Date('1983-04-17'), 7),
      'Developer',
      '28/09/2024', 
      EstadoSolicitud.enEspera
    );
    let solicitud2 = new Solicitud(
      new Persona('Tamara C.', 'tamara@gmail.com', new Date('1982-11-21'), 4),
      'Developer',
      '17/09/2024', 
      EstadoSolicitud.enEspera
    );
    this.solicitudes[0] = solicitud1;
    this.solicitudes[1] = solicitud2;
  }
}

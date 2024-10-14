import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';
import { EdadDesdeFechaNacimientoPipe } from '../../pipes/edad-desde-fecha-nacimiento.pipe';
import { RouterOutlet, RouterLink} from '@angular/router';
import { DatePipe } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-listado-solicitudes',
  standalone: true,
  imports: [EdadDesdeFechaNacimientoPipe, RouterOutlet, RouterLink, DatePipe, MatIconModule ],
  templateUrl: './listado-solicitudes.component.html',
  styleUrl: './listado-solicitudes.component.css'
})
export class ListadoSolicitudesComponent {
  @Input()
  solicitudes: Solicitud[] = [];

  @Output()
  solicitudBorrada = new EventEmitter<string>();
  
  borrarSolicitud(id: string | undefined): void {
    this.solicitudBorrada.emit(id);
  }

  ordenar(event:string):void{
    switch(event) { 
      case 'Nombre': { 
        this.solicitudes.sort(function (a, b) {
          if (a.persona.nombreCompleto > b.persona.nombreCompleto) { return 1; }
          if (a.persona.nombreCompleto < b.persona.nombreCompleto) { return -1; }
          return 0;
        });
         break; 
      } 
      case 'Estado': { 
        this.solicitudes.sort(function (a, b) {
          if (a.estadoSolicitud > b.estadoSolicitud) { return 1; }
          if (a.estadoSolicitud < b.estadoSolicitud) { return -1; }
          return 0;
        });
         break; 
      } 
      case 'Puesto': {
        this.solicitudes.sort(function (a, b) {
          if (a.puestoSolicitado > b.puestoSolicitado) { return 1; }
          if (a.puestoSolicitado < b.puestoSolicitado) { return -1; }
          return 0;
        });
          break;
      }
   } 
  }


}

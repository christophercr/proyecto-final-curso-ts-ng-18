import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';
import { EdadDesdeFechaNacimientoPipe } from '../../pipes/edad-desde-fecha-nacimiento.pipe';
import { RouterOutlet, RouterLink, Router, NavigationStart} from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ColumnasOrdenables } from '../../custom-types/solicitud-types';

@Component({
  selector: 'app-listado-solicitudes',
  standalone: true,
  imports: [EdadDesdeFechaNacimientoPipe, RouterOutlet, RouterLink, DatePipe, MatIconModule ],
  templateUrl: './listado-solicitudes.component.html',
  styleUrl: './listado-solicitudes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListadoSolicitudesComponent {
  router = inject(Router);

  @Input()
  solicitudes: Solicitud[] = [];

  @Output()
  solicitudBorrada = new EventEmitter<string>();

  borrado = false;

  ngOnInit(){
    this.router.events.subscribe((evento) => {
      if(evento instanceof NavigationStart){
        this.borrado = false;
      }
    });
  }
  
  borrarSolicitud(id: string | undefined): void {
    this.solicitudBorrada.emit(id);
    this.borrado = true;
  }

  ordenar(event:ColumnasOrdenables):void{
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

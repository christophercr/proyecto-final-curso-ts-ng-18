import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';

@Component({
  selector: 'app-solicitud-listado',
  standalone: true,
  imports: [],
  templateUrl: './solicitud-listado.component.html',
  styleUrl: './solicitud-listado.component.css'
})
export class SolicitudListadoComponent {
  @Input()
  public solicitudes: Solicitud[] = [];  
  
  @Output()
  solicitudBorrada = new EventEmitter<string>();
  
  borrarSolicitud(id: string | undefined): void {
    this.solicitudBorrada.emit(id);
  }
  
  

}



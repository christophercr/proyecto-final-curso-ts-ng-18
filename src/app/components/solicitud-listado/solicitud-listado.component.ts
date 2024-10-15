import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';
import { SolicitudService } from '../../services/solicitud.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-solicitud-listado',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './solicitud-listado.component.html',
  styleUrl: './solicitud-listado.component.css'
})
export class SolicitudListadoComponent {
  @Input()
  public solicitudes: Solicitud[] = []; 
    
  @Output()
  solicitudBorrada = new EventEmitter<string>();

  solicitudService = inject(SolicitudService);
  
  ngOnInit(){
    this.solicitudService.recargarSolicitudes(); // recarga los datos originales
    this.solicitudes= this.solicitudService.consultarSolicitudes(); // consulto las solicitudes existentes.
  }
  
  
  borrarSolicitud(id: string | undefined): void {
    this.solicitudBorrada.emit(id);
  }
  

}



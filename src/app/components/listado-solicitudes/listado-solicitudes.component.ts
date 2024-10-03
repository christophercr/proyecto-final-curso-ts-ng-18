import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';
import { EdadDesdeFechaNacimientoPipe } from '../../pipes/edad-desde-fecha-nacimiento.pipe';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-listado-solicitudes',
  standalone: true,
  imports: [EdadDesdeFechaNacimientoPipe, RouterOutlet, DatePipe ],
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
  
}

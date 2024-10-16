import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';
import { SolicitudService } from '../../services/solicitud.service';
import { NgFor } from '@angular/common'; 
import { DatePipe } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-solicitud-listado',
  standalone: true,
  imports: [DatePipe, NgFor, FormsModule],
  templateUrl: './solicitud-listado.component.html',
  styleUrl: './solicitud-listado.component.css',
  changeDetection : ChangeDetectionStrategy.OnPush,
})


export class SolicitudListadoComponent {
  selectedOption: string = ' ';
  printedOption: string = ' ';

  options = [
    { name: "Puesto Solicitado", value: 1 },
    { name: "Años de Experiencia", value: 2 },
    { name: "Fecha de Solicitud", value: 3 },
    
  ]

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
  
  
  ordenar():void{
        // crear un array a partir del metodo slices
        // this.solicitudes = (this.solicitudes.slice(0)).sort((a, b) => parseInt(b.puestoSolicitud) - parseInt(a.puestoSolicitud));
        // crear un array a partir de otro spread operator (operador "esparcir")
        //this.solicitudes = [...this.solicitudes].sort((a, b) => parseInt(b.puestoSolicitud) > parseInt(a.puestoSolicitud)); 
    switch(this.selectedOption) { 
      case 'Puesto Solicitado': { 
        this.solicitudes.sort(function (a, b) {
          if (a.puestoSolicitud > b.puestoSolicitud) { return 1; }
          if (a.puestoSolicitud < b.puestoSolicitud) { return -1; }
          return 0;        
        });
         break; 
      } 
      case 'Años de Experiencia': { 
        this.solicitudes.sort(function (a, b) {
          if (a.anyosExperiencia > b.anyosExperiencia) { return 1; }
          if (a.anyosExperiencia < b.anyosExperiencia) { return -1; }
          return 0;
        });
         break; 
      } 
      case 'Fecha de Solicitud': {
        this.solicitudes.sort(function (a, b) {
          if (a.fechaSolicitud > b.fechaSolicitud) { return 1; }
          if (a.fechaSolicitud < b.fechaSolicitud) { return -1; }
          return 0;
        });
          break;
      }
   } 
  }
  
}



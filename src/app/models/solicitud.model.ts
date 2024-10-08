import { FormControl, Validators } from '@angular/forms';

export class Solicitud {
  nombre: string;
  email: string;
  edad: string;
  anyosExperiencia: string;    
  puestoSolicitado: string;
  fechaSolicitud: number;
  estadoSolicitud: string;
  _identifier: string;

  constructor(
    nombre: string,
    email: string,
    edad: string,
    anyosExperiencia: string,    
    puestoSolicitado: string,
    fechaSolicitud: number,
    estadoSolicitud: string,
    identifier?: string,
  ) {
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
    this.anyosExperiencia= anyosExperiencia;
    this.puestoSolicitado = puestoSolicitado;
    this.fechaSolicitud = fechaSolicitud;
    this.estadoSolicitud = estadoSolicitud;
    if (identifier) {
      this._identifier = identifier;
    } else {
      // esto solo es un ejemplo, en un proyecto real es mejor utilizar UUIDs
      // https://www.npmjs.com/package/uuid
      this._identifier = Math.random().toString(36).substr(2, 9);
    }
    
   }

  
}
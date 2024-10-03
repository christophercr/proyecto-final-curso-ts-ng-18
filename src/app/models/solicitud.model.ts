import { FormControl, Validators } from '@angular/forms';

export class Solicitud {
  nombre: string;
  email: string;
  edad: string;
  anyos_experiencia: string;    
  puesto_solicitado: string;
  fecha_solicitud: number;
  estado_solicitud: string;
  _identifier: string;

  constructor(
    nombre: string,
    email: string,
    edad: string,
    anyos_experiencia: string,    
    puesto_solicitado: string,
    fecha_solicitud: number,
    estado_solicitud: string,
    identifier?: string,
  ) {
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
    this.anyos_experiencia= anyos_experiencia;
    this.puesto_solicitado = puesto_solicitado;
    this.fecha_solicitud = fecha_solicitud;
    this.estado_solicitud = estado_solicitud;
    if (identifier) {
      this._identifier = identifier;
    } else {
      // esto solo es un ejemplo, en un proyecto real es mejor utilizar UUIDs
      // https://www.npmjs.com/package/uuid
      this._identifier = Math.random().toString(36).substr(2, 9);
    }
    
   }

  
}
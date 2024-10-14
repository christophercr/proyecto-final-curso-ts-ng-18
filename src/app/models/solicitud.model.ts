import { EstadoSolicitud, Puesto } from '../custom-types/solicitud-types';
import { Persona } from './persona.model';
import { Expose } from 'class-transformer';

export class Solicitud {
    private _id: string;
        @Expose() get id(): string | undefined {return this._id;}
        set id(id : string) {this._id = id}

    private _persona : Persona;
        @Expose() get persona(): Persona {return this._persona;}
        set persona(persona : Persona) {this._persona = persona}
        
    private _aniosExperiencia : number;
        @Expose() public get aniosExperiencia(): number {return this._aniosExperiencia;}
        set aniosExperiencia(aniosExperiencia : number) {this._aniosExperiencia = aniosExperiencia}

    private _puestoSolicitado : Puesto;
        @Expose()public get puestoSolicitado(): Puesto {return this._puestoSolicitado;}
        set puestoSolicitado(puestoSolicitado : Puesto) {this._puestoSolicitado = puestoSolicitado}

    private _fechaSolicitud : Date;
        @Expose() public get fechaSolicitud(): Date {return this._fechaSolicitud;}
        set fechaSolicitud(fechaSolicitud : Date) {this._fechaSolicitud = fechaSolicitud}

    private _estadoSolicitud : EstadoSolicitud;
        @Expose() public get estadoSolicitud(): EstadoSolicitud {return this._estadoSolicitud;}
        set estadoSolicitud(estadoSolicitud : EstadoSolicitud) {this._estadoSolicitud = estadoSolicitud}

  constructor(
    id: string,
    persona: Persona,
    puestoSolicitado: Puesto,
    fechaSolicitud: Date,
    estadoSolicitud: EstadoSolicitud,
    aniosExperiencia: number
  ) {
    if (id) {
        this._id = id;
    } else {
        this._id = crypto.randomUUID();
    }
    this._persona = persona;
    this._aniosExperiencia = aniosExperiencia;
    this._puestoSolicitado = puestoSolicitado;
    this._fechaSolicitud = fechaSolicitud;
    this._estadoSolicitud = estadoSolicitud;
  }
}

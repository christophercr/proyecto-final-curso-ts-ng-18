import { EstadoSolicitud } from "../constants/estado-solicitud";
import { Persona } from "./persona";
import { Expose } from 'class-transformer';

export class Solicitud {
    private _persona : Persona;
        @Expose() get persona(): Persona {return this._persona;}
        set persona(persona : Persona) {this._persona = persona}

    private _puestoSolicitado : string;
        @Expose()public get puestoSolicitado(): string {return this._puestoSolicitado;}
        set puestoSolicitado(puestoSolicitado : string) {this._puestoSolicitado = puestoSolicitado}

    private _fechaSolicitud : string;
        @Expose() public get fechaSolicitud(): string {return this._fechaSolicitud;}
        set fechaSolicitud(fechaSolicitud : string) {this._fechaSolicitud = fechaSolicitud}

    private _estadoSolicitud : EstadoSolicitud;
        @Expose() public get estadoSolicitud(): EstadoSolicitud {return this._estadoSolicitud;}
        set estadoSolicitud(estadoSolicitud : EstadoSolicitud) {this._estadoSolicitud = estadoSolicitud}

    constructor(persona : Persona, puestoSolicitado : string, fechaSolicitud : string, estadoSolicitud : EstadoSolicitud){
        this._persona = persona;
        this._puestoSolicitado = puestoSolicitado;
        this._fechaSolicitud = fechaSolicitud;
        this._estadoSolicitud = estadoSolicitud;
    }
}


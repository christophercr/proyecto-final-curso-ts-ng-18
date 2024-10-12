import type { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { Solicitud } from './solicitud.model';

export type DeserializationFn<S> = (serializedCollection: any) => S;

export interface ISolicitudService<S> {
  consultarSolicitudes(): Solicitud[];
  eliminarSolicitud(solicitudId:string):void;
} 

export const SOLICITUD_STORAGE_SERVICE = new InjectionToken('SolicitudStorageService');
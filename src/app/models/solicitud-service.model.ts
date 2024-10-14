import { Solicitud } from './solicitud.model';

export type DeserializationFn<S> = (serializedCollection: any) => S;

export interface ISolicitudService<S> {
  consultarSolicitudes(): Solicitud[];
} 
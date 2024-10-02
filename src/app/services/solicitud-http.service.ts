import { inject, Injectable } from '@angular/core';
import { DeserializationFn, SolicitudStorageService } from '../models/solicitud-service.model';
import { catchError, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudHttpService implements SolicitudStorageService{
  private readonly _http = inject(HttpClient);

  constructor() { }

  getAllItems<S>(deserializerFn: DeserializationFn<S>): Observable<S[]> {
    const endpoint = `solicitudes`;
    return this._http.get<any[]>(`http://localhost:3000/${endpoint}`).pipe(
      map((solicitudArray) => {
        const solicitudesDevueltas = solicitudArray.map((item) => {
          const normalizedCollection = { ...item, identifier: item.persona }; 
          return deserializerFn(normalizedCollection);
        });

        console.log('Solicitudes devueltas: ', solicitudesDevueltas);
        return solicitudesDevueltas;
      }),
      catchError((err) => {
        console.error('Fallo al obtener la lista de solicitudes. Error: ', err);
        throw new Error(err); 
      }),
    );
  }
}

import { Solicitud } from './../interfaces/solicitud';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  http = inject(HttpClient);
  base = "http://localhost:3000"

  constructor() { }

  getSolicitudes(): Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(this.base + '/solicitudes')
  }
  getSolicitudPorNombre(nombre:string): Observable<Solicitud[]>{
    return this.getSolicitudes().pipe(
      map(datos => {
        const r = new RegExp(`${nombre}\.*`);
        return datos.filter(dato => dato.nombre.match(r))
      })
    );
  }
  getSolicitudPorEmail(email:string): Observable<Solicitud[]>{
    return this.getSolicitudes().pipe(
      map(datos => {
        const r = new RegExp(`${email}\.*`);
        return datos.filter(dato => dato.email.match(r))
      })
    );
  }

  getSolicitudPorID(id:string): Observable<Solicitud>{
    return this.http.get<Solicitud[]>(this.base + `/solicitudes?id=${id}`).pipe(
      map(resp => resp[0])
    );
  }

  nuevaSolicitud(solicitud: Solicitud): Observable<void>{
    return this.http.post<void>(this.base + '/solicitudes', solicitud);
  }

  actualizarSolicitud(solicitud: Solicitud): Observable<void>{
    console.log(solicitud);

    return this.http.put<void>(this.base + `/solicitudes/${solicitud.id}`, solicitud);
  }

}

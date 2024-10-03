import { plainToClassFromExist } from 'class-transformer';
import { inject, Injectable } from '@angular/core';
import { ISolicitudService, SOLICITUD_STORAGE_SERVICE } from '../models/solicitud-service.model';
import { Solicitud } from '../models/solicitud.model';
import { lastValueFrom, Observable } from 'rxjs';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService implements ISolicitudService<Solicitud>{
 /*  private readonly _solicitudStorageService = inject(SOLICITUD_STORAGE_SERVICE); */

  private _listaSolicitudes : Solicitud[] = [];

  public get listaSolicitudes():Solicitud[]{
    return this._listaSolicitudes;
  }

  constructor(){}
  
  /* deserializeCollection = (serializedCollection: any): Solicitud => {
    return plainToClassFromExist<Solicitud, any>(new Solicitud(persona, puestoSolicitado, fechaSolicitud, estadoSolcitud), serializedCollection);
  }; */

  consultarSolicitudes(): Solicitud[] {
    return this.listaSolicitudes;
  }

 /*  consultarSolicitudes(): Promise<Solicitud[]> {
    return lastValueFrom(this._solicitudStorageService.getAllItems(this.deserializeCollection));
  } */

  recargarSolicitudes(){
    let solicitud1 = new Solicitud(
      '',
      new Persona('Alberto M.', 'alberto@gmail.com', new Date('1983-04-17')),
      'Developer',
      new Date(2024, 9, 24), 
      'En espera',
      7
    );
    let solicitud2 = new Solicitud(
      '',
      new Persona('Tamara C.', 'tamara@gmail.com', new Date('1982-11-21')),
      'Developer',
      new Date(2024, 9, 17), 
      'En espera',
      4
    );
    this.listaSolicitudes[0] = solicitud1;
    this.listaSolicitudes[1] = solicitud2;
  }

  eliminarSolicitud(solicitudId:string){
    if (solicitudId) {
      this._listaSolicitudes = this._listaSolicitudes.filter((solicitud) => {
        return solicitud.id !== solicitudId;
      });
    }
  }

  crearSolicitud(solicitud:Solicitud){
    if (solicitud) {
      this._listaSolicitudes.push(solicitud);
    }
  }
  
}

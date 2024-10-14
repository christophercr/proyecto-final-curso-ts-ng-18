import { Injectable } from '@angular/core';
import { ISolicitudService} from '../models/solicitud-service.model';
import { Solicitud } from '../models/solicitud.model';
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

  recargarSolicitudes():void{
    let solicitud1 = new Solicitud(
      '',
      new Persona(
        'Alberto M.', 
        'alberto@gmail.com', 
        new Date(1983, 3, 18, 0, 0, 0),
      ),
      'Programador',
      new Date(93, 3, 24), 
      'En espera',
      7
    );
    let solicitud2 = new Solicitud(
      '',
      new Persona(
        'Tamara C.', 
        'tamara@gmail.com', 
        new Date(1982, 11, 21, 0, 0, 0),
      ),
      'Analista', 
      new Date(1987, 9, 17), 
      'Aceptada',
      4
    );
    this.listaSolicitudes[0] = solicitud1;
    this.listaSolicitudes[1] = solicitud2;
  }

  eliminarSolicitud(solicitudId:string):void{
    if (solicitudId) {
      this._listaSolicitudes = this._listaSolicitudes.filter((solicitud) => {
        return solicitud.id !== solicitudId;
      });
    }
  }

  crearSolicitud(solicitud:Solicitud):void{
    if (solicitud) {
      this._listaSolicitudes.push(solicitud);
    }
  }

  modificarSolicitud(solicitudModificada:Solicitud):void{
    this._listaSolicitudes.map((s, index) => {
      if(s.id === solicitudModificada.id){
        this._listaSolicitudes[index] = solicitudModificada;
      }
    });
  }

  consultarSolicitud(solicitudId:string):Solicitud | undefined{
    if (solicitudId) {
      return this._listaSolicitudes.find((solicitud) => {
        return solicitud.id === solicitudId;
      });
    }
    return;
  }
  
}

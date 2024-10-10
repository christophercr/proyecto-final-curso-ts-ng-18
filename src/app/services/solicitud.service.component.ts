import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../models/solicitud.model';

@Component({
  selector: 'app-solicitud.service',
  standalone: true,
  imports: [],
  templateUrl: './solicitud.service.component.html',
  styleUrl: './solicitud.service.component.css'
})
export class SolicitudService {
  reloadSolicitudColecciones() { }

  private _listaSolicitudes : Solicitud[] = [];

  public get listaSolicitudes():Solicitud[]{
    return this._listaSolicitudes;
  }

  constructor(){}

  consultarSolicitudes(): Solicitud[] {
    return this.listaSolicitudes;
  }

  recargarSolicitudes():void{
    let nuevaSolicitud1 = new Solicitud('Sergio','sergio@gmail.com', '34', '7', 'Programador', 12, 'En Espera' );
    let nuevaSolicitud2 = new Solicitud('Juan','juan@gmail.com', '22', '7', 'AnalistaProgramador', 12, 'En Espera' );
    let nuevaSolicitud3 = new Solicitud('Ana Julia','anajulian@gmail.com', '34', '7', 'Programador', 12, 'En Espera' );

    this.listaSolicitudes[0] = nuevaSolicitud1;
    this.listaSolicitudes[1] = nuevaSolicitud2;
    this.listaSolicitudes[2] = nuevaSolicitud3;
  }
   
  crearSolicitud(solicitud:Solicitud):void{
    if (solicitud) {
      this._listaSolicitudes.push(solicitud);
    }
  }
  
  consultarSolicitud(solicitudId:string):Solicitud | undefined{
    if (solicitudId) {
      return this._listaSolicitudes.find((solicitud) => {
        return solicitud._identifier === solicitudId;
      });
    }
    return;
  }
  
 }

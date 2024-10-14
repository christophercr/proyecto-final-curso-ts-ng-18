import { Component, inject } from '@angular/core';
import { MenuNavComponent } from '../../../components/menu-nav/menu-nav/menu-nav.component';
import { ListadoSolicitudesComponent } from '../../../components/listado-solicitudes/listado-solicitudes.component';
import { SolicitudService } from '../../../services/solicitud.service';
import { Solicitud } from '../../../models/solicitud.model';

@Component({
  selector: 'app-listado-solicitudes-page',
  standalone: true,
  imports: [ListadoSolicitudesComponent, MenuNavComponent],
  templateUrl: './listado-solicitudes-page.component.html',
  styleUrl: './listado-solicitudes-page.component.css'
})
export class ListadoSolicitudesPageComponent {

  private readonly _solicitudService = inject(SolicitudService);
  private _coleccionSolicitudes:Solicitud[] = [];

  public get coleccionSolicitudes():Solicitud[]{
    return this._coleccionSolicitudes;
  }

  ngOnInit(){
    this._solicitudService.recargarSolicitudes();
    this._coleccionSolicitudes =  this._solicitudService.consultarSolicitudes();
  }

  eliminarSolicitud(solicitudId: string):void{
    this._solicitudService.eliminarSolicitud(solicitudId);
    this._coleccionSolicitudes =  this._solicitudService.consultarSolicitudes();
  }

}

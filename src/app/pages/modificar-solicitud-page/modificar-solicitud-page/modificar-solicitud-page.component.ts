import { Component} from '@angular/core';
import { ModificarSolicitudComponent } from '../../../components/modificar-solicitud/modificar-solicitud/modificar-solicitud.component';
import { ChildrenListadoPage } from '../../../models/children-listado-page.model';

@Component({
  selector: 'app-modificar-solicitud-page',
  standalone: true,
  imports: [ModificarSolicitudComponent],
  templateUrl: './modificar-solicitud-page.component.html',
  styleUrl: './modificar-solicitud-page.component.css'
})
export class ModificarSolicitudPageComponent extends ChildrenListadoPage{
}

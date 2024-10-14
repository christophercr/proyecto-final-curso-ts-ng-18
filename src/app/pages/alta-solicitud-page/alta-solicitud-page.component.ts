import { Component} from '@angular/core';
import { AltaSolicitudComponent } from "../../components/alta-solicitud/alta-solicitud.component";
import { ChildrenListadoPage } from '../../models/children-listado-page.model';

@Component({
  selector: 'app-alta-solicitud-page',
  standalone: true,
  imports: [AltaSolicitudComponent],
  templateUrl: './alta-solicitud-page.component.html',
  styleUrl: './alta-solicitud-page.component.css'
})
export class AltaSolicitudPageComponent extends ChildrenListadoPage{

}

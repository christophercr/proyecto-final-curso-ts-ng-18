import { Component, inject } from '@angular/core';
import { AltaSolicitudComponent } from "../../../components/alta-solicitud/alta-solicitud/alta-solicitud.component";
import { SolicitudService } from '../../../services/solicitud.service';
import { Solicitud } from '../../../models/solicitud.model';

@Component({
  selector: 'app-alta-solicitud-page',
  standalone: true,
  imports: [AltaSolicitudComponent],
  templateUrl: './alta-solicitud-page.component.html',
  styleUrl: './alta-solicitud-page.component.css'
})
export class AltaSolicitudPageComponent {

}

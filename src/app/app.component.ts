import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SolicitudListadoComponent } from "./components/solicitud-listado/solicitud-listado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SolicitudListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-final-curso-ts-ng-18';
}

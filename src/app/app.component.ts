import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoSolicitudesComponent } from './components/listado-solicitudes/listado-solicitudes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoSolicitudesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestión de Solicitudes Laborales';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoSolicitudesComponent } from './components/listado-solicitudes/listado-solicitudes.component';
import { MenuNavComponent } from "./components/menu-nav/menu-nav/menu-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoSolicitudesComponent, MenuNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestión de Solicitudes Laborales';
}

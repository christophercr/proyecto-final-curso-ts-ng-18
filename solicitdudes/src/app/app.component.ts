import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { MenuComponent } from "./components/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'solicitdudes';
}

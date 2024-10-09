import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-inicio',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.css'
})
export class PaginaInicioComponent {
  private readonly _router = inject(Router)

  // modo manual de navegar, en caso de no quere usar la directiva 'routerLink'
  public navigateTo(route: string) {
    this._router.navigate([route]);
  }
}

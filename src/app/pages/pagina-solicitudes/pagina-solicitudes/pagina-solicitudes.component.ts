import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { SolicitudNuevaComponent } from '../../../components/solicitud-nueva/solicitud-nueva.component';
import { SolicitudService } from '../../../services/solicitud.service.component';
import { KeyValuePipe } from '@angular/common';
import { delay } from 'rxjs';

@Component({
  selector: 'app-pagina-solicitudes',
  standalone: true,  
  imports: [ReactiveFormsModule, PaginaSolicitudesComponent, SolicitudNuevaComponent, KeyValuePipe, RouterLink, RouterOutlet],
  templateUrl: './pagina-solicitudes.component.html',
  styleUrl: './pagina-solicitudes.component.css'
})
export class PaginaSolicitudesComponent {
  private readonly _solicitudService = inject(SolicitudService);
  private readonly _router = inject(Router);
  private readonly _currentRoute = inject(ActivatedRoute);

  
  changeView(view: string) {
    this._router.navigate([view], { relativeTo: this._currentRoute });    
  }
  onRouteActivated(component: PaginaSolicitudesComponent | SolicitudNuevaComponent) {
    //console.log('------ route activated', component);
    if (component instanceof SolicitudNuevaComponent) {
      component.created.pipe(delay(3000)).subscribe((solicitud) => {
        delay(100);
     /*    this._solicitudService.reloadSolicitudColecciones().subscribe({
          next: (valor: string) => {
            console.log('El valor de next: ' + valor);
          },
          error: (err: string) => {
            console.log('El valor de error: ' + err);
          },
          complete: () => {
            //console.log('El valor de complete');
          },
        }); */
        this._router.navigate(['solicitud-listado'], { relativeTo: this._currentRoute });
      });
    }  else {
      // collection list component
    }
  }
}


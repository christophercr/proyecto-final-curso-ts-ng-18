import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SolicitudListadoComponent } from "./components/solicitud-listado/solicitud-listado.component";
import { SolicitudNuevaComponent } from './components/solicitud-nueva/solicitud-nueva.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SolicitudListadoComponent, SolicitudNuevaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-final-curso-ts-ng-18';
  showComponent = true;
  prueba = 'valor inicial desde app component';

  
  constructor() {
    setTimeout(() => {
      this.prueba = 'otro valor dinamico';
    }, 3000);

   
  }

  public toggleComponent() {
    this.showComponent = !this.showComponent;
  }

  public onCollectionReload(data: unknown) {
    //console.log('AppComponent: Collection reload event received', data);
  }

  public onButtonHovered(isHovered: boolean) {
    //console.log('button is hovered', isHovered);
  }
}

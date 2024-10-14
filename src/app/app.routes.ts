import { Routes } from '@angular/router';
import { PaginaInicioComponent } from './pages/pagina-inicio/pagina-inicio.component';
import { PaginaSolicitudesComponent } from './pages/pagina-solicitudes/pagina-solicitudes/pagina-solicitudes.component';
import { SolicitudNuevaComponent } from './components/solicitud-nueva/solicitud-nueva.component';
import { SolicitudListadoComponent } from './components/solicitud-listado/solicitud-listado.component';

export const routes: Routes = [
    {
        path: '',
        component: PaginaInicioComponent,
        children: [
          /* {
             path: '',  
             pathMatch: 'full', // pero aquí le decimos que no añada '/'  => localhost:3000/solicitudes
             redirectTo: 'solicitud-listado',
           },  */         
           {
             path: 'solicitud-nueva', 
             component: SolicitudNuevaComponent, 
             
           },
           {
             path: 'solicitud-listado', 
             component: SolicitudListadoComponent, 
           },
           {
            path: 'solicitud-edicion', 
            component: SolicitudListadoComponent, 
          },
         ]
      },
      {
        path: '**', // ruta por defecto (debe ser la última del array ya que es la que se activa cuando no hay otra ruta que haga match)
        redirectTo: '',
      },

];

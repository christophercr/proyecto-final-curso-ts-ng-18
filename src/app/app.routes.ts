import { Routes } from '@angular/router';
import { ListadoSolicitudesPageComponent } from './pages/listado-solicitudes-page/listado-solicitudes-page/listado-solicitudes-page.component';
import { AltaSolicitudComponent } from './components/alta-solicitud/alta-solicitud.component';
import { ModificarSolicitudComponent } from './components/modificar-solicitud/modificar-solicitud/modificar-solicitud.component';

export const routes: Routes = [
    {
      path: '',
      component: ListadoSolicitudesPageComponent,
      children: [
        {
          path: '',
          pathMatch: 'full',
          redirectTo: 'collection-list',
        },
        {
          path: 'alta-solicitud',
          component: AltaSolicitudComponent
        },
        {
          path: 'modificar-solicitud/:id',
          component: ModificarSolicitudComponent
        }
      ]
    },
    {
      path: '**', // ruta por defecto (debe ser la última del array ya que es la que se activa cuando no hay otra ruta que haga match)
      redirectTo: '',
    }
]

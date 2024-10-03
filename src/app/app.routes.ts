import { Routes } from '@angular/router';
import { ListadoSolicitudesPageComponent } from './pages/listado-solicitudes-page/listado-solicitudes-page/listado-solicitudes-page.component';
import { AltaSolicitudComponent } from './components/alta-solicitud/alta-solicitud/alta-solicitud.component';

export const routes: Routes = [
    {
      path: '',
      component: ListadoSolicitudesPageComponent,
      children: [
        {
          path: '',  // => localhost:3000/books/
          pathMatch: 'full', // pero aquí le decimos que no añada '/'  => localhost:3000/books
          redirectTo: 'collection-list',
        },
        {
          path: 'alta-solicitud', // => localhost:3000/books/new-book
          component: AltaSolicitudComponent
        }
      ]
    },
    {
      path: '**', // ruta por defecto (debe ser la última del array ya que es la que se activa cuando no hay otra ruta que haga match)
      redirectTo: '',
    }
]

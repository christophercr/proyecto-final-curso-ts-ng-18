import { Routes } from '@angular/router';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'nueva',
    component:SolicitudComponent
  },
  {
    path:'editar/:id',
    component:SolicitudComponent
  },
  {
    path:'solicitudes',
    component: SolicitudesComponent
  },
  {
    path:'**',
    component:HomeComponent
  }
];

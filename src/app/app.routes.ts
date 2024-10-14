import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy, Routes } from '@angular/router';
import { ListadoSolicitudesPageComponent } from './pages/listado-solicitudes-page/listado-solicitudes-page/listado-solicitudes-page.component';
import { AltaSolicitudComponent } from './components/alta-solicitud/alta-solicitud.component';
import { ModificarSolicitudComponent } from './components/modificar-solicitud/modificar-solicitud/modificar-solicitud.component';
import { Injectable } from '@angular/core';
import { ModificarSolicitudPageComponent } from './pages/modificar-solicitud-page/modificar-solicitud-page/modificar-solicitud-page.component';
import { AltaSolicitudPageComponent } from './pages/alta-solicitud-page/alta-solicitud-page.component';

/**
 * RouteReuseStrategy to be used when defining `onSameUrlNavigation: 'reload'` in the RouterModule config.
 *
 * As described in https://github.com/angular/angular/issues/21115#issuecomment-645588886
 * Demoed in https://stackblitz.com/edit/angular-ivy-router-base-2hgd2t
 */
@Injectable({
  // see: https://angular.io/api/core/Injectable#providedIn
  // eslint-disable-next-line @angular-eslint/use-injectable-provided-in
  providedIn: null,
})
export class CustomRouteReuseStrategy extends RouteReuseStrategy {
  /**
   * Whether the given route should detach for later reuse.
   * Always returns false for `BaseRouteReuseStrategy`.
   *
   * @param route - The route that will be detached
   * @returns false
   */
  public shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  /**
 * A no-op; the route is never stored since this strategy never detaches routes for later re-use.
 *
 * @param route - The route that will be stored
 * @param detachedTree - The detached route
 */
public store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {
  // noop
}

/**
 * Returns `false`, meaning the route (and its subtree) is never reattached
 *
 * @param route - The route that will be checked
 * @returns false
 */
public shouldAttach(route: ActivatedRouteSnapshot): boolean {
  return false;
}

/**
 * Returns `null` because this strategy does not store routes for later re-use.
 *
 * @param route - The route that will be retrieved
 * @returns null
 */
public retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
  return null;
}

/**
   * Determines if a route should be reused.
   *
   * IMPORTANT: This strategy returns `false` always because even routes with the same url should never be reused, which means that
   * the routed component should be destroyed and re-instantiated so that all lifecycle hooks are executed.
   * For example: changing pairs in PairExplorer.
   *
   * @param future - The route that will be displayed
   * @param curr - The route that is currently displayed
   * @returns false
   */
public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
  return false;
}
}

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
          component: AltaSolicitudPageComponent
        },
        {
          path: 'modificar-solicitud/:id',
          component: ModificarSolicitudPageComponent,

        }
      ]
    },
    {
      path: '**', // ruta por defecto (debe ser la última del array ya que es la que se activa cuando no hay otra ruta que haga match)
      redirectTo: '',
    }
]

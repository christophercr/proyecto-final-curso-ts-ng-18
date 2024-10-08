import { Routes } from '@angular/router';
import { PaginaInicioComponent } from './pages/home-page/home-page/pagina-inicio.component';

export const routes: Routes = [
    {
        path: '',
        component: PaginaInicioComponent,
      },
      {
        path: 'books', // => localhost:3000/books
        // Mejora en performance: el código de este componente ya no se incluye en el main.js sino en un fichero JS aparte (chunk)
        loadComponent: () => import('./pages/books-page/pagina-solicitudes.component').then((module) => module.BooksPageComponent),
        canActivate: [adminGuard],
        /*resolve: {
          collections: bookCollectionsResolver,
        },*/
        children: [
          {
            path: '',  // => localhost:3000/books/
            pathMatch: 'full', // pero aquí le decimos que no añada '/'  => localhost:3000/books
            redirectTo: 'collection-list',
          },
          {
            path: 'new-collection',  // => localhost:3000/books/new-collection
            component: NewMediaCollectionComponent,
          },
          {
            path: 'new-book', // => localhost:3000/books/new-book
            component: NewBookComponent,
            /*resolve: {
              collections: bookCollectionsResolver,
            }*/
          },
          {
            path: 'collection-list', // => localhost:3000/books/collection-list
            component: CollectionListComponent,
          },
        ],
        //component: BooksPageComponent,
      },
      {
        path: '**', // ruta por defecto (debe ser la última del array ya que es la que se activa cuando no hay otra ruta que haga match)
        redirectTo: '',
      },

];

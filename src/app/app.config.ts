import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouteReuseStrategy } from '@angular/router';

import { CustomRouteReuseStrategy, routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    /* { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }, */
  ]
};

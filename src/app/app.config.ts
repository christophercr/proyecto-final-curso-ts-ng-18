import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

/* let mediaStorageProvider: Provider = {
  provide: MEDIA_STORAGE_SERVICE,
  useClass: MediaHttpStorageService, // Aquí podemos decidir que implementación en concreto utilizar: LocalStorage o Http
};

if (environment.storageType === 'local') {
  mediaStorageProvider = {
    provide: MEDIA_STORAGE_SERVICE,
    useClass: MediaLocalStorageService, // Aquí podemos decidir que implementación en concreto utilizar: LocalStorage o Http
  };
} */

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-solicitud.service',
  standalone: true,
  imports: [],
  templateUrl: './solicitud.service.component.html',
  styleUrl: './solicitud.service.component.css'
})
export class SolicitudService {
  reloadSolicitudColecciones() { }
    
   /*  return this.getMediaCollectionIdentifiersList().pipe(
      delay(1000), // simular una respuesta lenta de nuestro servidor de API
      switchMap((keys) => {
        const observablesArray$ = keys.map((item) => {
          //console.log(" switchmap Quiero ver el libro nuevo");
          return this.loadMediaCollection(item);
        });

        return forkJoin(observablesArray$);
      }),
      map((collections) => {
        this._bookCollections.clear(); // clear the current state
        //console.log("Map Quiero ver el libro nuevo");
        collections.forEach((collection) => {
          this._bookCollections.set(collection.identifier, collection);
        });
        const arrayColecciones = Array.from(this._bookCollections.entries());
        const nuevoMapa = new Map(arrayColecciones);
        this._bookCollectionsSubject$.next(nuevoMapa);
        this._bookCollectionsSignal.set(nuevoMapa); */
        // en mundo observables
        //this._bookCollectionsSubject$.next(new Map(this._bookCollections)); // genero un nuevo mapa para cambiar la referencia de memória y lo emito
        // en mundo signals
        //this._bookCollectionsSignal.set(new Map(this._bookCollections)); // genero un nuevo mapa para cambiar la referencia de memória y lo emito

 //       return;
  //    }),
  //  );
 // }
 }

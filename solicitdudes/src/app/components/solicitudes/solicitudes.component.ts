import { Solicitud } from './../../core/interfaces/solicitud';
import { Component, inject, signal, Signal } from '@angular/core';
import { SolicitudService } from '../../core/services/solicitud.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { TreeError } from '@angular/compiler';
import { Router, RouterLink, RouterModule } from '@angular/router';

enum TipoBusqueda{
  email,nombre
}

class Busqueda {
  constructor(public tipo:TipoBusqueda, public termino: string){}
}

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [FormsModule, RouterModule, JsonPipe],
  templateUrl: './solicitudes.component.html',
  styleUrl: './solicitudes.component.css'
})
export class SolicitudesComponent {
  router = inject(Router);
  solicitudesService = inject(SolicitudService);
  solicitudes = signal<Solicitud[]>([]);
  nombre: string='';
  email: string='';
  searchSubject= new Subject<Busqueda>();
  suscripcion!: Subscription;
  ngOnInit(){
    this.solicitudesService.getSolicitudes().subscribe(res=>{
      this.solicitudes.set(res);
    })

    this.suscripcion = this.searchSubject.pipe(
      debounceTime(5000),
      distinctUntilChanged()

    ).subscribe(busqueda =>{
      this.buscar(busqueda);
    })
  }

  buscarPorNombre(){
    this.email = '';
    const busqueda = new Busqueda(TipoBusqueda.nombre,this.nombre);
    this.searchSubject.next(busqueda);
  }

  buscarPorEmail(){
    this.nombre = '';
    const busqueda = new Busqueda(TipoBusqueda.email,this.email);
    this.searchSubject.next(busqueda);
  }

  buscar(busqueda: Busqueda){
    if (busqueda.tipo == TipoBusqueda.email){
      this.solicitudesService.getSolicitudPorEmail(busqueda.termino).subscribe(res =>{
        this.solicitudes.update(old => res);
      })
    }else if (busqueda.tipo == TipoBusqueda.nombre){
      this.solicitudesService.getSolicitudPorNombre(busqueda.termino).subscribe(res =>{
        this.solicitudes.update(old => res);
      })
    }
  }

  ordenar(campo:string){
    if(campo=='experiencia'){
      this.solicitudes().sort((c1,c2) => c1.experiencia-c2.experiencia);
    }else if(campo=='posicion'){
      this.solicitudes().sort((c1,c2) => c1.puesto.localeCompare(c2.puesto));
    }
  }

  editarSolicitud(solicitud: Solicitud){
    this.router.navigate(['editar',solicitud.id])
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe();
  }
}

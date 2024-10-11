import { estadoString, Solicitud } from './../../core/interfaces/solicitud';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { SolicitudService } from '../../core/services/solicitud.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { JsonPipe } from '@angular/common';

export function validExperiencia(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const anios: number =  +control.value;

    if(anios>0 && anios<30){
      return null;
    }else
      return {experiencia: true};
  };
}

@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, RouterModule],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css'
})
export class SolicitudComponent {

  router = inject(Router);
  solicitudesService = inject(SolicitudService);
  constructor(public route: ActivatedRoute) { }

  formulario = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl('', [Validators.required, Validators.maxLength(40)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    experiencia: new FormControl(0, [validExperiencia()]),
    puesto: new FormControl('', Validators.required),
    fechaNacimiento: new FormControl('', [Validators.required,Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)]),
    estado: new FormControl('en espera', Validators.required)
  })

  modoEdicion=false;

  ngOnInit(){
    this.route.params.subscribe(params => {
      const id = params['id'];
      if(id){
        this.solicitudesService.getSolicitudPorID(id).subscribe(resp =>{
          this.formulario.controls['id'].setValue(resp.id!);
          this.formulario.controls['nombre'].setValue(resp.nombre);
          this.formulario.controls['email'].setValue(resp.email);
          this.formulario.controls['fechaNacimiento'].setValue(resp.fechaNacimiento);
          this.formulario.controls['puesto'].setValue(resp.puesto);
          this.formulario.controls['experiencia'].setValue(resp.experiencia);
          this.formulario.controls['estado'].setValue(resp.estado!);
        })
        this.modoEdicion = true;
      }else{
        this.formulario.controls.estado.disable();
      }
    });
  }

  enviar(){
    const {nombre, email, experiencia, puesto, fechaNacimiento} = this.formulario.value;
    let solicitud = new Solicitud(nombre!,email!,fechaNacimiento!,experiencia!,puesto!);
    if(this.modoEdicion){
      solicitud.id=this.formulario.controls['id'].value!;
      solicitud.estado = this.formulario.controls['estado'].value as estadoString
      this.solicitudesService.actualizarSolicitud(solicitud).subscribe();
    }else{
      this.solicitudesService.nuevaSolicitud(solicitud).subscribe();
    }
    this.router.navigate(['solicitudes'])
  }
}

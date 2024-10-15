import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AsyncPipe, JsonPipe, KeyValuePipe } from '@angular/common';
import { Solicitud } from '../../models/solicitud.model';


export function validarAnyosExperiencia(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const anios: number =  +control.value;

    if(anios>0 && anios<30){
      return null;
    }else
      return {anyosExperiencia: true};
  };
}

@Component({
  selector: 'app-solicitud-nueva',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, KeyValuePipe, AsyncPipe],
  templateUrl: './solicitud-nueva.component.html',
  styleUrl: './solicitud-nueva.component.css'
})
export class SolicitudNuevaComponent {
 @Output()
 created: EventEmitter<Solicitud> = new EventEmitter<Solicitud>(); 
 
    myForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(40)]),    
    email: new FormControl('', [Validators.required, Validators.email]),
    edad: new FormControl('', [Validators.required,Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/)]), 
    anyosExperiencia: new FormControl(0, [validarAnyosExperiencia()]), 
    puestoSolicitud: new FormControl('', Validators.required),
    fechaSolicitud: new FormControl('',Validators.required),
    estadoSolicitud: new FormControl('en espera', Validators.required)
  });

   crearSolicitud(): void {
    if (this.myForm.valid) {
      const rawValue: any = this.myForm.getRawValue();

      for (const key of Object.keys(rawValue)) {
        rawValue[key] = rawValue[key] === null ? undefined : rawValue[key];
      }

      const solicitudACrear: Solicitud = new Solicitud(
        rawValue.nombre,
        rawValue.email === null ? undefined : rawValue.description,
        rawValue.edad,
        rawValue.anyosExperiencia,
        rawValue.puestoSolicitud,
        rawValue.fechaSolicitud, 
        rawValue.estadoSolicitud,       
      );

      this.created.emit(solicitudACrear);
      this.myForm.reset();
    }
  } 
}
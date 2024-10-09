import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, JsonPipe, KeyValuePipe } from '@angular/common';
import { Solicitud } from '../../models/solicitud.model';


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
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required]), 
    anyosExperiencia: new FormControl('', [Validators.required]), 
    puestoSolicitud: new FormControl(''),
    fechaSolicitud: new FormControl(''),
    estadoSolicitud: new FormControl('')
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
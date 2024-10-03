import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css'
})
export class SolicitudComponent {
    myForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    edad: new FormControl('', [Validators.required]),   
    puesto-solicitud: new FormControl(''),
    fecha-solicitud: new FormControl(''),
    estado-solicitud: new FormControl(''),
  });

  crearSolicitud(): void {
    if (this.myForm.valid) {
      const rawValue: any = this.myForm.getRawValue();

      for (const key of Object.keys(rawValue)) {
        rawValue[key] = rawValue[key] === null ? undefined : rawValue[key];
      }

      const bookToCreate: Solicitud = new Solicitud(
        rawValue.nombre,
        rawValue.email === null ? undefined : rawValue.description,
        rawValue.pictureLocation === null ? undefined : rawValue.pictureLocation,        
        rawValue.author,
        rawValue.numberOfPages,
      );

      this.created.emit(bookToCreate);
      this.myForm.reset();
    }
  }
}
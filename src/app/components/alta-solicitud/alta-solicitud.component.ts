import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Solicitud } from '../../models/solicitud.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Persona } from '../../models/persona.model';
import { SolicitudService } from '../../services/solicitud.service';
import { JsonPipe } from '@angular/common';
import { FormSolicitud } from '../../models/form-solicitud.model';
import { edadValida } from '../../validators/form-solicitud.validator';

@Component({
  selector: 'app-alta-solicitud',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './alta-solicitud.component.html',
  styleUrl: './alta-solicitud.component.css',
})
export class AltaSolicitudComponent implements FormSolicitud {
  private _solicitudService = inject(SolicitudService);

  @Output()
  created: EventEmitter<Solicitud> = new EventEmitter<Solicitud>();

  myForm = new FormGroup({
    nombreCompleto: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
    ]),
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]),
    fechaNacimiento: new FormControl(new Date(), [
      Validators.required,
      edadValida(),
    ]),
    aniosExperiencia: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
    ]),
    puestoSolicitado: new FormControl('', Validators.required),
  });

  grabarSolicitud(): void {
    if (this.myForm.valid) {
      let rawValue: any = this.myForm.getRawValue();

      for (const key of Object.keys(rawValue)) {
        rawValue[key] = rawValue[key] === null ? undefined : rawValue[key];
      }

      
    const rawValueTime = Date.parse(rawValue.fechaNacimiento);
    const rawValueDate = new Date(rawValueTime);

      const solicitudACrear: Solicitud = new Solicitud(
        '',
        new Persona(
          rawValue.nombreCompleto,
          rawValue.email,
          rawValueDate
        ),
        rawValue.puestoSolicitado,
        new Date(),
        'En espera',
        rawValue.aniosExperiencia
      );

      this._solicitudService.crearSolicitud(solicitudACrear);
      this._solicitudService.consultarSolicitudes();
      this.created.emit();
      this.myForm.reset();
    }
  }
}

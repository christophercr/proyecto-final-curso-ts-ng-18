import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Solicitud } from '../../../models/solicitud.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { edadValida, FormSolicitud } from '../../../models/form-solicitud.model';
import { Persona } from '../../../models/persona.model';
import { SolicitudService } from '../../../services/solicitud.service';

@Component({
  selector: 'app-modificar-solicitud',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './modificar-solicitud.component.html',
  styleUrl: './modificar-solicitud.component.css'
})
export class ModificarSolicitudComponent implements FormSolicitud{
  private _solicitudService = inject(SolicitudService);

  @Input()
  solicitud?:Solicitud;
  
  @Output()
  modifyed: EventEmitter<Solicitud> = new EventEmitter<Solicitud>();

  myForm = new FormGroup({
    nombreCompleto: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
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

  crearSolicitud(): void {
    if (this.myForm.valid) {
      let rawValue: any = this.myForm.getRawValue();

      for (const key of Object.keys(rawValue)) {
        rawValue[key] = rawValue[key] === null ? undefined : rawValue[key];
      }

      const solicitudACrear: Solicitud = new Solicitud(
        '',
        new Persona(
          rawValue.nombreCompleto,
          rawValue.email,
          rawValue.fechaNacimiento
        ),
        rawValue.puestoSolicitado,
        new Date(),
        'En espera',
        rawValue.aniosExperiencia
      );

      this._solicitudService.modificarSolicitud(solicitudACrear);
      this._solicitudService.consultarSolicitudes();
    }
  }

}

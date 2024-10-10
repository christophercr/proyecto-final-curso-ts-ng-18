import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Solicitud } from '../../../models/solicitud.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePipe, JsonPipe } from '@angular/common';
import { edadValida, FormSolicitud } from '../../../models/form-solicitud.model';
import { Persona } from '../../../models/persona.model';
import { SolicitudService } from '../../../services/solicitud.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar-solicitud',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe, DatePipe],
  templateUrl: './modificar-solicitud.component.html',
  styleUrl: './modificar-solicitud.component.css'
})
export class ModificarSolicitudComponent implements FormSolicitud{
  private _solicitudService = inject(SolicitudService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private solicitudParaModificar?:string|null;

  public solicitud?:Solicitud;
  
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
    aniosExperiencia: new FormControl(0, [
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
    ]),
    puestoSolicitado: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.solicitudParaModificar = this.route.snapshot.paramMap.get('id');
    if(this.solicitudParaModificar != null){
      this.cargarSolicitudEnFomulario(this.solicitudParaModificar);
    }
  }

  cargarSolicitudEnFomulario(solicitudParaModificar:string){
    this.solicitud = this._solicitudService.consultarSolicitud(solicitudParaModificar);
    if(this.solicitud != null){
      this.myForm.controls.nombreCompleto.setValue(this.solicitud.persona.nombreCompleto);
      this.myForm.controls.email.setValue(this.solicitud.persona.email);
      this.myForm.controls.fechaNacimiento.setValue(this.solicitud.persona.fechaNacimiento);
      this.myForm.controls.aniosExperiencia.setValue(this.solicitud.aniosExperiencia);
      this.myForm.controls.puestoSolicitado.setValue(this.solicitud.puestoSolicitado);

    }
  }

  grabarSolicitud(): void {
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

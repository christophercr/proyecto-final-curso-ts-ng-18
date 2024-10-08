import type { Observable } from 'rxjs';
import { InjectionToken } from '@angular/core';
import { Solicitud } from './solicitud.model';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function edadValida(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const rawValue = control.getRawValue();
    const edad: number = new Date().getFullYear() - rawValue.getFullYear();
    return edad > 17 && edad < 65 ? { passwordStrength: true } : null;
  };
}

export interface FormSolicitud {
  crearSolicitud(): void;
} 
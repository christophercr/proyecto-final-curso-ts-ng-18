import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { EdadDesdeFechaNacimientoPipe } from '../pipes/edad-desde-fecha-nacimiento.pipe';

export function edadValida(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const rawValue = control.getRawValue();
    const rawValueTime = Date.parse(rawValue);
    const rawValueDate = new Date(rawValueTime);
    
    const edad: number = new EdadDesdeFechaNacimientoPipe().transform(rawValueDate);
    return edad > 17 && edad < 65 ? { edadValida: true } : null;
  };
}

export interface FormSolicitud {
  crearSolicitud(): void;
} 
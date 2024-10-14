import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { EdadDesdeFechaNacimientoPipe } from "../pipes/edad-desde-fecha-nacimiento.pipe";

export function edadValida(): ValidatorFn {
    const edadDesdeFechaNacimientoPipe = new EdadDesdeFechaNacimientoPipe(); 
    return (control: AbstractControl): ValidationErrors | null => {
      const rawValue = control.getRawValue();
      const rawValueTime = Date.parse(rawValue);
      const rawValueDate = new Date(rawValueTime);
      
      const edad: number = edadDesdeFechaNacimientoPipe.transform(rawValueDate);
      if(edad > 17 && edad < 65){
        return null;
      }else{
        return { edadValida: true };
      }
    };
}
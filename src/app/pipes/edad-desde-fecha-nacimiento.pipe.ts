import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edadDesdeFechaNacimiento',
  standalone: true
})
export class EdadDesdeFechaNacimientoPipe implements PipeTransform {

  transform(value: Date): number {
    return new Date().getFullYear() - value.getFullYear();
  }

}

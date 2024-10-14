import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edadDesdeFechaNacimiento',
  standalone: true
})
export class EdadDesdeFechaNacimientoPipe implements PipeTransform {

  transform(value: Date): number {
    let valueDate;
    if(!(value instanceof Date)){
      valueDate = new Date(value);
    }else{
      valueDate = value;
    }

    if(valueDate.getTime() < new Date().getTime()){
      return new Date().getFullYear() - valueDate.getFullYear();
    } else {
      return 0;
    }
  }

}

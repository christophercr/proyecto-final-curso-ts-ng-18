export type  estadoString= 'aprobado' | 'rechazado' | 'en espera';
export class Solicitud {

  id!:string;
  fecha: string;
  estado?: estadoString;
  edad: number;

  constructor(public nombre: string, public email: string,public fechaNacimiento:string,
    public experiencia:number, public puesto: string
  ){
    this.fecha = new Date().toISOString();
    this.estado = 'en espera'
    this.edad = this.calcularEdad()
  }

  calcularEdad(){
    const anio = +this.fechaNacimiento.substring(6,10);
    console.log('anio ' + anio);
    return new Date().getFullYear() - anio;
  }

  setEdad(){

    this.edad = this.calcularEdad();
    console.log('edad ' + this.edad);
    return this.edad;
  }
}

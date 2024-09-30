import { Expose } from 'class-transformer';
import { EdadDesdeFechaNacimientoPipe } from '../pipes/edad-desde-fecha-nacimiento.pipe';

export class Persona {
    private _nombreCompleto : string;
        @Expose() get nombreCompleto(): string {return this._nombreCompleto;}
        set nombreCompleto(nombreCompleto : string) {this._nombreCompleto = nombreCompleto}

    private _email : string;
        @Expose()public get email(): string {return this._email;}
        set email(email : string) {this._email = email}

    private _fechaNacimiento : Date;
        @Expose() public get fechaNacimiento(): Date {return this._fechaNacimiento;}
        set fechaNacimiento(fechaNacimiento : Date) {this._fechaNacimiento = fechaNacimiento}

    private _aniosExperiencia : number;
        @Expose() public get aniosExperiencia(): number {return this._aniosExperiencia;}
        set aniosExperiencia(aniosExperiencia : number) {this._aniosExperiencia = aniosExperiencia}

    constructor(nombreCompleto : string, email : string, fechaNacimiento : Date, aniosExperiencia : number){
        this._nombreCompleto = nombreCompleto;
        this._email = email;
        this._fechaNacimiento = fechaNacimiento;
        this._aniosExperiencia = aniosExperiencia;
    }
}

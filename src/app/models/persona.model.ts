import { Expose } from 'class-transformer';

export class Persona {
    private _nombreCompleto : string;
        @Expose()public  get nombreCompleto(): string {return this._nombreCompleto;}
        set nombreCompleto(nombreCompleto : string) {this._nombreCompleto = nombreCompleto}

    private _email : string;
        @Expose()public get email(): string {return this._email;}
        set email(email : string) {this._email = email}

    private _fechaNacimiento : Date;
        @Expose() public get fechaNacimiento(): Date {return this._fechaNacimiento;}
        set fechaNacimiento(fechaNacimiento : Date) {this._fechaNacimiento = fechaNacimiento}

    constructor(nombreCompleto : string, email : string, fechaNacimiento : Date){
        this._nombreCompleto = nombreCompleto;
        this._email = email;
        this._fechaNacimiento = fechaNacimiento;
    }
}

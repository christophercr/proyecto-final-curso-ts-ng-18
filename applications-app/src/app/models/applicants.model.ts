import { Component } from '@angular/core';
import { Status } from '../constants/application-status.constant';

export class ApplicantsModel {
  /* name!: string;
  email!: string;
  age!: number;
  yearsExp!: number;
  position!: string;
  dateOfApplication!: string;
  status!: Status; */


  constructor(
    name: string,
    email: string,
    age: number,
    yearsExp: number,
    position: string,
    dateOfApplication: string,
    status: Status
  ) {
/*     this.name = name;
    this.email = email;
    this.age = age;
    this.yearsExp = this.yearsExp;
    this.position = this.position;
    this.status = this.status; */
  }
}

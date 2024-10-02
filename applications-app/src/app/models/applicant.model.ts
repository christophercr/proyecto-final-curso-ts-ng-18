import { Component } from '@angular/core';
import { Status } from '../constants/application-status.constant';

export class ApplicantModel {

  constructor(
    name: string,
    email: string,
    age: number,
    yearsExp: number,
    position: string,
    dateOfApplication: string,
    status: Status
  ) {

  }
}

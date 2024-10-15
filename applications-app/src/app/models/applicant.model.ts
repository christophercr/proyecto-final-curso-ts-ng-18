import { Component } from '@angular/core';
import { Status } from '../constants/application-status.constant';

export class ApplicantModel {
  private name: string;
  private email: string;
  private age: number;
  private yearsExp: number;
  private position: string;
  private dateOfApplication: string;
  private status: Status;
  id?: string;

  constructor(
    name: string,
    email: string,
    age: number,
    yearsExp: number,
    position: string,
    dateOfApplication: string,
    status: Status,
    id?: string
  ) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.yearsExp = yearsExp;
    this.position = position;
    this.dateOfApplication = dateOfApplication;
    this.status = status;
    this.id = id;
  }
}

import { Component } from '@angular/core';
import { Status } from '../constants/application-status.constant';

export class ApplicantModel {
  private _name: string;
  private _email: string;
  private _age: number;
  private _yearsExp: number;
  private _position: string;
  private _dateOfApplication: string;
  private _status: Status;
  _id?: string;

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
    this._name = name;
    this._email = email;
    this._age = age;
    this._yearsExp = yearsExp;
    this._position = position;
    this._dateOfApplication = dateOfApplication;
    this._status = status;
    this._id = id;
  }
}

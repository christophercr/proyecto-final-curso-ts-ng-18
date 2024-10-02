import { Injectable } from '@angular/core';
import {ApplicantModel} from '../models/applicant.model';
import { Status } from '../constants/application-status.constant';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsServiceService {

_aplicant : ApplicantModel = {
  name : 'Jorge Álvarez',
email : 'jrgmad@hotmail.com',
age : 44,
yearsExp : 2,
position : 'Developer',
dateOfApplication : '30/09/2024',
status : Status.Refused
};

/* _applicants : ApplicantsModel[] = [{
name : 'Jorge Álvarez',
email : 'jrgmad@hotmail.com',
age : 44,

}]; */

  constructor() { }
}

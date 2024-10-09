import { computed, Injectable, signal, type Signal } from '@angular/core';
import { BehaviorSubject, delay, forkJoin, map, ReplaySubject, Subject, switchMap, type Observable } from 'rxjs';
import { ApplicantModel } from '../models/applicant.model';

@Injectable({
  providedIn: 'root'// singleton en toda la aplicacion
})
export class ApplicationsService {
constructor() { }

/* 
async createApplicant(applicant: ApplicantModel): Promise<void> {

  TODO: continuar por aquí#########################################################3
  try {
    await this.saveBook(book);

  } catch (err) {
    console.error('Error while saving the new applicant: ', err);
    // this.displayErrorMessage(`Failed to update the existing book collection called ${existingCollection.name}`); 
  }
} */

/* 
saveBook(
  collection: Readonly<MediaCollection<T>>,
  typeOfChange: TypeOfChange = 'create-collection',
  collectionItemOrId?: T | string,
  collectionId?: string,
) {
  if (!collection) {
    throw new Error('The list cannot be null or undefined!');
  }

  //console.log(`Saving media collection with the following name ${collection.name}`);
  return lastValueFrom(this._mediaStorageService.saveItem(collection, this.mediaTypeName, typeOfChange, collectionItemOrId, collectionId));
} */



  /* 
_aplicant : ApplicantModel = {
  name : 'Jorge Álvarez',
email : 'jrgmad@hotmail.com',
age : 44,
yearsExp : 2,
position : 'Developer',
dateOfApplication : '30/09/2024',
status : Status.Refused
}; */

/* _applicants : ApplicantsModel[] = [{
name : 'Jorge Álvarez',
email : 'jrgmad@hotmail.com',
age : 44,

}]; */

  
}

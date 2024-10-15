import {
  inject,
  Injectable,
} from '@angular/core';
import {
  catchError,
  lastValueFrom,
  tap,
} from 'rxjs';
import { ApplicantModel } from '../models/applicant.model';
import { HttpClient } from '@angular/common/http';
import { instanceToPlain } from 'class-transformer';

@Injectable({
  providedIn: 'root', // singleton en toda la aplicacion
})
export class ApplicationsService {
  private readonly _http = inject(HttpClient);

  constructor() {
    console.log(`Initializing applicant http storage service`);
  }

  async createApplicant(applicantOrId: ApplicantModel | string): Promise<void> {
    try {
      await this.applicantHTTPRequesting(applicantOrId, 'create-applicant');
    } catch (err) {
      console.error('Error while saving the new applicant: ', err);
      // this.displayErrorMessage(`Failed to update the existing book collection called ${existingCollection.name}`);
    }
  }

  applicantHTTPRequesting(
    applicantOrId: ApplicantModel | string,
    typeOfChange: string
  ): Promise<void> | undefined | void {
    if (!applicantOrId) {
      throw new Error('The applicant or its Id cannot be null or undefined!');
    }
    if (typeOfChange === 'create-applicant') {
      if (!(applicantOrId instanceof ApplicantModel)) {
        throw new Error('The applicant must be an instance of ApplicantModel!');
      }
      const applicant: ApplicantModel = applicantOrId as ApplicantModel;
      /* 
      FIXME, conseguir acceder a las propiedades applicantOrId sabiendo que es de tipo ApplicantModel para poder utilizarlas en los logs
        */
      const serializedVersion = instanceToPlain(applicant, {
        excludePrefixes: ['_'],
      });

      return lastValueFrom(
        this._http.post<void>('http://localhost:3000/applications', serializedVersion).pipe(
          tap((value) => {
            console.log(
              `Saved the applicant successfully! Saved value: `,
              value
            );
          }),
          catchError((err) => {
            console.error(
              `Failed to save the applicant. Error: ${err}`
            );
            throw new Error(err);
          })
        )
      );
    } // Fin 'create-applicant'


  }// Fin applicantHTTPService
}

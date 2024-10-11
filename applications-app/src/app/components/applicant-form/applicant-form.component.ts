import { Component, inject, Output, EventEmitter } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MatCommonModule,
  provideNativeDateAdapter,
} from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { Status } from '../../constants/application-status.constant';
import { ApplicantModel } from '../../models/applicant.model';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ApplicationsService } from '../../services/applications.service';

@Component({
  selector: 'app-applicants-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatCommonModule,
  ],
  templateUrl: './applicant-form.component.html',
  styleUrl: './applicant-form.component.css',
})
export class ApplicantsFormComponent {
  private readonly _applicantservice = inject(ApplicationsService);

  @Output()
  created: EventEmitter<ApplicantModel> = new EventEmitter<ApplicantModel>();

  fb = inject(FormBuilder);

  applicantForm = this.fb.group({
    name: ['', [Validators.required, Validators.min(2), Validators.max(120)]],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.required, Validators.min(18), Validators.max(120)]],
    yearsExp: [
      '',
      [Validators.required, Validators.min(0), Validators.max(100)],
    ],
    position: ['', Validators.required],
    dateOfApplication: [null, Validators.required],
    status: ['', Validators.required],
  });

  statuses = Object.values(Status);

  sendApplicantForm(): void {
    if (this.applicantForm.valid) {
      /*  const applicant: ApplicantModel = this.applicantForm.value;
      console.log('applicant sent:', applicant);  */

      const rawValue: any = this.applicantForm.getRawValue();

      for (const key of Object.keys(rawValue)) {
        rawValue[key] = rawValue[key] === null ? undefined : rawValue[key];
      }

      const applicantToCreate: ApplicantModel = new ApplicantModel(
        rawValue.name,
        rawValue.email,
        rawValue.age,
        rawValue.yearsExp,
        rawValue.position,
        rawValue.dateOfApplication,
        rawValue.status
      );
      this._applicantservice.createApplicant(applicantToCreate).then(() => {
        this.created.emit(applicantToCreate);
        this.applicantForm.reset();
      });
    }
  }
} // Fin de clase

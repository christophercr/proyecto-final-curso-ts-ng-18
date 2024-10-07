import { Component, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCommonModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { Status } from '../../constants/application-status.constant';
import { ApplicantModel } from '../../models/applicant.model';
import { ReactiveFormsModule, FormsModule, AsyncValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Moment } from 'moment';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-applicants-form',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatSelectModule, MatDatepickerModule, MatMomentDateModule, ReactiveFormsModule, FormsModule, MatCommonModule],
  templateUrl: './applicant-form.component.html',
  styleUrl: './applicant-form.component.css',
})


export class ApplicantsFormComponent {

 /*  applicantMod = new ApplicantModel(
    'Manolo',
    'manolete@manolete.com',
    33,
    4,
    'Analista',
    '06/10/2024',
    Status.Approved,
  ); */


  

  fb = inject(FormBuilder);

  applicantForm = this.fb.group({
    name: ['', Validators.required, Validators.min(2), Validators.max(120)],
    email: ['', [Validators.required, Validators.email]],
    age: ['', [Validators.required, Validators.min(18), Validators.max(120)]],
    yearsExp: [  '', [Validators.required, Validators.min(0), Validators.max(100)],
    ],
    position: ['', Validators.required],
    dateOfApplication: [null, Validators.required],
    status: ['', Validators.required],
  }); 

  statuses = Object.values(Status);

  onSubmit() {
    if (this.applicantForm.valid) {
      const usuario: ApplicantModel = this.applicantForm.value;
      console.log('Usuario enviado:', usuario);
      // ¿Gestionar la lógica de envío servidor?
    }
  }



}

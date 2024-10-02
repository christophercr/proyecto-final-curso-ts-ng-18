import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Status } from '../../constants/application-status.constant';
import { ApplicantModel } from '../../models/applicant.model';
import { FormGroup} from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicants-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './applicant-form.component.html',
  styleUrl: './applicant-form.component.css',
})
export class ApplicantsFormComponent {
  applicantForm: FormGroup;
  statuses = Object.values(Status);

  /* applicant : ApplicantModel; */

  constructor(private fb: FormBuilder) {
    /* this.applicant = new ApplicantModel( 'Jorge','jrgmad@gmail.com', 44 , 2, 'Developer', '20/09/2024', Status.WaitListed) */
    this.applicantForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(0), Validators.max(120)]],
      yearsExp: [  '', [Validators.required, Validators.min(0), Validators.max(100)],
      ],
      position: ['', Validators.required],
      dateOfApplication: ['', Validators.required],
      status: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.applicantForm.valid) {
      const usuario: ApplicantModel = this.applicantForm.value;
      console.log('Usuario enviado:', usuario);
      // ¿Gestionar la lógica de envío servidor?
    }
  }
}

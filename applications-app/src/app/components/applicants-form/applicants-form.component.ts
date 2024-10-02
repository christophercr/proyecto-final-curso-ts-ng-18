
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Status } from '../../constants/application-status.constant';
import { ApplicantsModel} from '../../models/applicants.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-applicants-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './applicants-form.component.html',
  styleUrl: './applicants-form.component.css'
})
export class ApplicantsFormComponent {

  applicant : ApplicantsModel;

  constructor() {
    this.applicant = new ApplicantsModel( 'Jorge','jrgmad@gmail.com', 44 , 2, 'Developer', 20/09/2024, Status.WaitListed)
  }

  myForm = new FormGroup(
    applicant.
  );

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicantFormComponent } from './components/applicant-form/applicant-form.component'; 
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApplicantFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: []
})

export class AppComponent {
  title = 'applications-app';
}

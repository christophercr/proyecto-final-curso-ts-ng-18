import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicantsFormComponent } from './components/applicant-form/applicant-form.component'; 
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApplicantsFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'applications-app';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicantsFormComponent } from './components/applicants-form/applicants-form.component'; 

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

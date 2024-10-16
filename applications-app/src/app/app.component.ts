import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApplicantFormComponent } from './components/applicant-form/applicant-form.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApplicantFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('transitionMessages', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class AppComponent {
  title = 'applications-app';
}

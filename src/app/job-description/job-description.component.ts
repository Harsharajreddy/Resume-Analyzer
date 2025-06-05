import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-description',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent {
  jobTitle = '';
  industry = '';
  jobDescription = '';

  constructor(private router: Router) {}

  analyze() {
    console.log('Analyzing with:', this.jobTitle, this.industry, this.jobDescription);
    this.router.navigate(['/analyze']); // ✅ navigate on submit
  }
}

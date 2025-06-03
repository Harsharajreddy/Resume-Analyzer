import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-analyze',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent { 
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }

}

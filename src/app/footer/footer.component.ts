import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // ✅ fix here
})
export class FooterComponent {
  subscribe() {
    alert('Subscribed!');
  }
}

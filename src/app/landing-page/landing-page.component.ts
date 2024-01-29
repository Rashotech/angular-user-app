import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  imports: [NavbarComponent, FontAwesomeModule],
})
export class LandingPageComponent {
  faCoffee = faCoffee;
  faArrowRight = faArrowRight;
}

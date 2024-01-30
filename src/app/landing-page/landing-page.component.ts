import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from '../navbar/navbar.component';
import { FocusCardComponent } from '../focus-card/focus-card.component';
import { SPECIALIZATIONS } from '../../data/user.data';
import { ISpecialization } from '../../data/user.interface';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  imports: [FontAwesomeModule, FocusCardComponent]
})
export class LandingPageComponent {
  faArrowRight = faArrowRight;
  specializations: ISpecialization[] = SPECIALIZATIONS;
}

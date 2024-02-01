import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { FocusCardComponent } from '../../components/focus-card/focus-card.component';
import { SPECIALIZATIONS } from '../../../data/user.data';
import { ISpecialization } from '../../../data/user.interface';
import { TEAMMEMBERS } from '../../../data/user.data';
import { IMember } from '../../../data/user.interface';
import { TeamComponent } from '../../components/team/team.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  imports: [FontAwesomeModule, FocusCardComponent, HeroSectionComponent, TeamComponent]
})
export class LandingPageComponent {
  faArrowRight = faArrowRight;
  specializations: ISpecialization[] = SPECIALIZATIONS;
  teamMembers: IMember[] = TEAMMEMBERS;
}

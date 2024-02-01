import { Component, Input } from '@angular/core';
import { IMember } from '../../../data/user.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLink, faArrowRight, faA } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-team',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  @Input() teamMember!: IMember;
  faLink = faLink;
  faArrowRight = faArrowRight;
}

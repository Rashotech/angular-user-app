import { Component, Input } from '@angular/core';
import { ISpecialization } from '../../data/user.interface';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-focus-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './focus-card.component.html',
  styleUrl: './focus-card.component.css'
})
export class FocusCardComponent {
  @Input() specialization!: ISpecialization;
}

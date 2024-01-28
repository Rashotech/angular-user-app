import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IUser } from '../../data/user.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({
    required: true,
    alias: "user"
  })
  user: IUser | null;

  constructor() {
    this.user = null;
  }
}

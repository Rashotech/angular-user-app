import { Component } from '@angular/core';
import { IUser } from '../../data/user.interface';
import { NavbarComponent } from "../navbar/navbar.component";
import { CardComponent } from "../card/card.component";
import { USERS } from '../../data/user.data';

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
    imports: [NavbarComponent, CardComponent]
})
export class UserListComponent {
    users: IUser[] = USERS;
}

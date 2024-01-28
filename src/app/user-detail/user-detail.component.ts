import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-user-detail',
    standalone: true,
    templateUrl: './user-detail.component.html',
    styleUrl: './user-detail.component.css',
    imports: [NavbarComponent, RouterOutlet]
})
export class UserDetailComponent {

}

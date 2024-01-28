import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-user-detail',
    standalone: true,
    templateUrl: './user-detail.component.html',
    styleUrl: './user-detail.component.css',
    imports: [NavbarComponent]
})
export class UserDetailComponent {

}

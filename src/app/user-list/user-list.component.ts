import { Component, OnInit } from '@angular/core';
import { IUser } from '../../data/user.interface';
import { CardComponent } from "../card/card.component";
import { CardplaceholderComponent } from '../cardplaceholder/cardplaceholder.component';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
    imports: [CardComponent, HttpClientModule, CardplaceholderComponent]
})
export class UserListComponent implements OnInit {
    users: IUser[] = [];
    loading: boolean = false;

    constructor(private readonly userService: UserService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getUsers().subscribe({
            next: data => {
                this.users = data;
                this.loading = false;
            },
            error: error => {
                console.log(error)
            },
            complete: () => console.info("Data was successfully retrieved")
        });
    };
}

import { Component, OnInit } from '@angular/core';
import { IUser } from '../../data/user.interface';
import { CardComponent } from "../card/card.component";
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from "../search-box/search-box.component";

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
    imports: [CardComponent, HttpClientModule, SearchBoxComponent]
})
export class UserListComponent implements OnInit {
    users: IUser[] = [];
    loading: boolean = false;
    searchTerm = "";

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

import { Component, OnInit } from '@angular/core';
import { IUser } from '../../data/user.interface';
import { CardComponent } from "../card/card.component";
import { CardplaceholderComponent } from '../cardplaceholder/cardplaceholder.component';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from '../search/search.component';
import { SearchBoxComponent } from "../search-box/search-box.component";

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
    imports: [CardComponent, HttpClientModule, CardplaceholderComponent, SearchBoxComponent, SearchComponent]
})
export class UserListComponent implements OnInit {
    users: IUser[] = [];
    loading: boolean = false;
    searchTerm = "";

    constructor(private readonly userService: UserService) { }

    filterUsers() {
        return this.users.filter(user => user.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    }

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

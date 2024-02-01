import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../../models/user.model';
import { CardComponent } from '../../components/card/card.component';
import { CardplaceholderComponent } from '../../components/cardplaceholder/cardplaceholder.component';
import { UserService } from '../../services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from "../../components/search/search.component";
import { Subscription } from 'rxjs';
import { ISearch } from '../../models/search.model';

@Component({
    selector: 'app-user-list',
    standalone: true,
    templateUrl: './user-list.component.html',
    styleUrl: './user-list.component.css',
    imports: [
        CardComponent,
        HttpClientModule,
        CardplaceholderComponent,
        SearchComponent
    ]
})
export class UserListComponent implements OnInit, OnDestroy {
  users: IUser[] = [];
  loading: boolean = false;
  subscriber!: Subscription;
  searchTerm = '';
  error: string | null = null;
  searchFilters: string[] = ["name"];

  constructor(private readonly userService: UserService) {}

  filterUsers(): IUser[] {
    const lowercaseSearchTerm = this.searchTerm.toLowerCase();
    return this.users.filter(user => this.userMatchesSearch(user, lowercaseSearchTerm));
  }

  handleSearchChange(search: ISearch) {
    this.searchTerm = search.value;
    this.searchFilters = search.filters;
  }
  
  private userMatchesSearch(user: IUser, lowercaseSearchTerm: string): boolean {
    return this.searchFilters.some(filter => {
      const userInfo = user[filter as 'email' | 'name' | 'username'];  
      return userInfo.toLowerCase().includes(lowercaseSearchTerm);
    });
  }

  ngOnInit(): void {
    this.loading = true;
    this.subscriber = this.userService.getUsers().subscribe({
      next: (users) => this.users = users,
      error: () => this.error = "An error occurred, please try again",
      complete: () => this.loading = false
    })
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
} 

import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IUser } from '../../data/user.interface';
import { UserService } from '../user.service';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-user-detail',
    standalone: true,
    templateUrl: './user-detail.component.html',
    styleUrl: './user-detail.component.css',
    imports: [HttpClientModule, RouterOutlet, CardComponent]
})

export class UserDetailComponent implements OnInit {
    user: IUser | null = null;
    loading: boolean = false;
    @Input('id') userId = '';

    constructor(
        private readonly userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getSingleUser(Number(this.userId)).subscribe({
            next: data => {
                this.user = data;
                this.loading = false;
            },
            error: error => {
                console.log(error);
                return this.router.navigate(['/404'], { skipLocationChange: true });
            },
            complete: () => console.info("Data was successfully retrieved")
        });
    };
}

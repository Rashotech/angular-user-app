import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IUser } from '../../data/user.interface';
import { UserService } from '../user.service';
import { DetailsSkeletonComponent } from '../details-skeleton/details-skeleton.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
  imports: [HttpClientModule, RouterOutlet, FontAwesomeModule, DetailsSkeletonComponent],
})
export class UserDetailComponent implements OnInit {
  user: IUser | null = null;
  loading: boolean = false;
  faLink = faLink;
  @Input('id') userId = '';

  constructor(
    private readonly userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = true;
    this.userService.getSingleUser(Number(this.userId)).subscribe({
      next: (data) => {
            this.user = data;
            console.log(this.user);
        this.loading = false;
      },
      error: (error) => {
        console.log(error);
        return this.router.navigate(['/404'], { skipLocationChange: true });
      },
      complete: () => console.info('Data was successfully retrieved'),
    });
  }
}

import { HttpClientModule } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IUser } from '../../data/user.interface';
import { UserService } from '../user.service';
import { DetailsSkeletonComponent } from '../details-skeleton/details-skeleton.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
  imports: [HttpClientModule, FontAwesomeModule, DetailsSkeletonComponent, RouterOutlet],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  user: IUser | null = null;
  loading: boolean = false;
  subscriber!: Subscription;
  searchTerm = '';
  faLink = faLink;
  @Input('id') userId = '';

  constructor(
    private readonly userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.subscriber = this.userService.getSingleUser(Number(this.userId)).subscribe({
      next: (user) => this.user = user,
      error: () => this.router.navigate(['/404'], { skipLocationChange: true }),
      complete: () => this.loading = false
    })
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}

import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

export const routes: Routes = [
  { path: '',  component: LandingPageComponent },
  { path: 'users',  component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent }
];

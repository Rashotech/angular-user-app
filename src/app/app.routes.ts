import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', component: ErrorComponent },
];

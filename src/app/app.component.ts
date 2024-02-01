import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./pages/landing-page/landing-page.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [LandingPageComponent, RouterOutlet, NavbarComponent]
})
export class AppComponent {
  title = 'angular-user-app';
}

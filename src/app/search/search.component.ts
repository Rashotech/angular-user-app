import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  
  
  faf = faSliders;
  
  constructor() {}

  doSearch() {
    
  }  
}

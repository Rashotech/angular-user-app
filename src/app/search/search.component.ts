import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  faf = faSliders;
  
  @Input({ required: true})
  searchTerm!: string;

  @Output()
  searchTermChange: EventEmitter<string> = new EventEmitter();

  handleChange(value: string) {
    this.searchTermChange.emit(value);
  }
}

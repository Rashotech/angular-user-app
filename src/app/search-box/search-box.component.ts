import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @Input({ required: true})
  searchTerm!: string;

  @Output()
  searchTermChange: EventEmitter<string> = new EventEmitter();

  handleChange(value: string) {
    this.searchTermChange.emit(value);
  }
}

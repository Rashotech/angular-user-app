import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

interface IFilter {
  name: string;
  type: string;
}

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  faf = faSliders;
  isShowFilterOption: boolean;;
  filterOptions: IFilter[];
  
  @Input({ required: true})
  searchTerm!: string;

  @Output()
  searchTermChange: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.filterOptions =  [
      {
        name: "Name",
        type: "name"
      },
      {
        name: "Email",
        type: "email"
      },
      {
        name: "Address",
        type: "address"
      },
    ];
    this.isShowFilterOption = false;
  }

  handleChange(value: string) {
    this.searchTermChange.emit(value);
  }
    
  toggleDisplayDivIf() {  
    this.isShowFilterOption = !this.isShowFilterOption;  
  } 
}

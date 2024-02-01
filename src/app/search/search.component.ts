import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { FilterComponent } from "../filter/filter.component";
import { Filter, IFilter } from '../models/filter.model';
import { ISearch } from '../models/search.model';

@Component({
    selector: 'app-search',
    standalone: true,
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
    imports: [FontAwesomeModule, FormsModule, FilterComponent] 
})
export class SearchComponent {
  faf = faSliders;
  isFilterButtonVisible: boolean = false;
  filters: IFilter[] =  [
    {
      name: Filter.NAME,
      checked: true
    },
    {
      name: Filter.EMAIL,
      checked: false
    },
    {
      name: Filter.USERNAME,
      checked: false
    },
  ];
  
  @Input({ required: true})
  searchTerm!: string;

  @Output()
  searchTermChange: EventEmitter<ISearch> = new EventEmitter();
    
  toggleFilterButtonVisiblity() {  
    this.isFilterButtonVisible = !this.isFilterButtonVisible;   
  } 

  handleChange(value: string) {
    const filters = this.getActiveFilters();
    this.searchTermChange.emit({ value, filters });
  }
  
  handleFilterChange(newFilter: IFilter) {
    const index = this.filters.findIndex(filter => filter.name === newFilter.name);
    if (index !== -1) this.filters[index] = newFilter;
    const activeFilters = this.getActiveFilters();
    this.searchTermChange.emit({ value: this.searchTerm, filters: activeFilters });
  }

  private getActiveFilters() {
    const activeFilters = this.filters.filter(filter => filter.checked).map(filter => filter.name);
    return activeFilters.length > 0 ? activeFilters : [Filter.NAME];
  }
}

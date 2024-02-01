import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Filter, IFilter } from '../models/filter.model';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})

export class FilterComponent {
  @Input({ required: true })
  checked!: boolean;

  @Output()
  checkedChange: EventEmitter<IFilter> = new EventEmitter();

  @Input({ required: true })
  name!: Filter;

  handleChange(event: Event) {
    const element = event.target as HTMLInputElement;
    const checked = element.checked;
    this.checkedChange.emit({ checked, name: this.name });
  }
}

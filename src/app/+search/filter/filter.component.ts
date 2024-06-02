import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  capital = '';

  @Output() searchStarted = new EventEmitter<string>();

  search() {
    this.searchStarted.emit(this.capital);
  }
}

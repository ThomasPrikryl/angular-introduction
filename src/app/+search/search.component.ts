import { Component } from '@angular/core';
import {FilterComponent} from "./filter/filter.component";
import {CountryListComponent} from "./country-list/country-list.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FilterComponent,
    CountryListComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

}

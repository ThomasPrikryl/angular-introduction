import { Component } from '@angular/core';
import {FilterComponent} from "./filter/filter.component";
import {CountryListComponent} from "./country-list/country-list.component";
import {CountryService} from "../country.service";

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

  constructor(private countryService: CountryService) {
  }

  searchStarted($event: string) {
    this.countryService.loadData($event);
  }
}

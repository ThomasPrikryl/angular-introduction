import { Component } from '@angular/core';
import {CountryComponent} from "../../shared/country/country.component";
import {CommonModule} from "@angular/common";
import {CountryService} from "../../country.service";

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [
    CommonModule, CountryComponent
  ],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss'
})
export class CountryListComponent {

  countries$ = this.countryService.countries$;

  constructor(private countryService: CountryService) {
  }

}

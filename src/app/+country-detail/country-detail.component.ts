import {Component, Input, OnInit} from '@angular/core';
import {CountryService} from "../country.service";
import {Country} from "../models/country-list-data.model";
import {CountryComponent} from "../shared/country/country.component";

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [
    CountryComponent
  ],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent implements OnInit {

  @Input() countryId!: string;

  country?: Country;

  constructor(private countryService: CountryService) {
  }

  ngOnInit(): void {
    this.countryService.loadCountry(this.countryId)
      .subscribe((countries: Country[]) => {
        this.country = countries?.length > 0 ? countries?.[0] : undefined;
    });
  }


}

import {Component, Input, OnInit} from '@angular/core';
import {CountryService} from "../country.service";
import {Country, Review, ReviewResponse} from "../models/country-list-data.model";
import {CountryComponent} from "../shared/country/country.component";
import {CommonModule, DatePipe} from "@angular/common";
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [
    CountryComponent,
    DatePipe,
    NgbRating,
    CommonModule,
    FormsModule
  ],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent implements OnInit {

  @Input() countryId!: string;

  country?: Country;

  reviews: Review[] = [];

  constructor(private countryService: CountryService) {

  }

  ngOnInit(): void {
    this.countryService.loadCountry(this.countryId)
      .subscribe((countries: Country[]) => {
        this.country = countries?.length > 0 ? countries?.[0] : undefined;
    });
    this.countryService.loadReviewsForCountry(this.countryId)
      .subscribe((res: ReviewResponse) => {
        this.reviews = res?.reviews || [];
      });
  }


}

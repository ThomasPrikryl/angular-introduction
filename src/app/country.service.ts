import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "./models/country-list-data.model";
import {first, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  countries$ = new Subject<Country[]>();

  constructor(private httpClient: HttpClient) { }

  public loadData(capital: string) {

    this.httpClient.get<Country[]>('/api/countries?capital_like=' + capital)
      .pipe(first())
      .subscribe((data: Country[]) => {
        console.log('Data loaded', data);
        this.countries$.next(data);
    });

  }

  loadCountry(countryId: string) {
    return this.httpClient.get<Country[]>('/api/countries?id=' + countryId)
      .pipe(first());

  }
}

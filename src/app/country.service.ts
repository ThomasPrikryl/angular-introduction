import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Country} from "./models/country-list-data.model";
import {first, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }

  public loadData() {

    this.httpClient.get<Country[]>('/api/countries')
      .pipe(first())
      .subscribe((data: Country[]) => {
        console.log('Data loaded', data);
    });

  }

}

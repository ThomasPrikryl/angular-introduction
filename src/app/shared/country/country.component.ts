import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Country} from "../../models/country-list-data.model";
import {NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [
    CommonModule, FormsModule, NgbRating
  ],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnChanges {

  @Input() country?: Country;

  ngOnChanges(changes: SimpleChanges): void {
  }

}

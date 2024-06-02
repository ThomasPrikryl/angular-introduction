import { Routes } from '@angular/router';
import {SearchComponent} from "./+search/search.component";
import {NotFoundComponent} from "./+not-found/not-found.component";
import {CountryDetailComponent} from "./+country-detail/country-detail.component";

export const routes: Routes = [
  {
    path: 'search',
    pathMatch: 'full',
    component: SearchComponent
  },
  {
    path: 'detail/:countryId',
    pathMatch: 'full',
    loadComponent: () => import('./+country-detail/country-detail.component').then(m => m.CountryDetailComponent)
  },
  {
    path: 'not-found',
    pathMatch: 'full',
    component: NotFoundComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'search'
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

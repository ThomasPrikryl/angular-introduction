import { Routes } from '@angular/router';
import {SearchComponent} from "./+search/search.component";
import {NotFoundComponent} from "./+not-found/not-found.component";

export const routes: Routes = [
  {
    path: 'search',
    pathMatch: 'full',
    component: SearchComponent
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

import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, withComponentInputBinding, withDebugTracing} from '@angular/router';

import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import {provideHttpClient} from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
    withDebugTracing(),
    ),
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(FormsModule),
  ]
};

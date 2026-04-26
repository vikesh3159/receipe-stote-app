import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CoreModule } from './core.module';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AppRoutingModule, CoreModule), // This bridges your old routes
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideClientHydration(withEventReplay()),
  ],
};

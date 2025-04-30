import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { LoadingInterceptor } from './loader.interceptor';
import { LoaderSeriveService } from './loader-serive.service';

export const appConfig: ApplicationConfig = {
  providers: [ provideHttpClient(),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }, LoaderSeriveService, importProvidersFrom(HttpClientModule) ]
};

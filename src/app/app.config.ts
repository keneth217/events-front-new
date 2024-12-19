import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { heroUsers,heroChevronDown,heroChevronUp, heroArrowRightCircle, heroBars4, heroDocument,
  heroSquares2x2, heroPlusCircle, heroPercentBadge,heroWrenchScrewdriver,heroChartBar, heroCurrencyDollar,heroChatBubbleOvalLeft, heroXMark } from '@ng-icons/heroicons/outline';

import { heroPlaySolid } from '@ng-icons/heroicons/solid';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withFetch, withInterceptors} from "@angular/common/http";
import {provideToastr} from "ngx-toastr";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideIcons} from "@ng-icons/core";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch(), ),
  provideAnimations(), // required animations providers
  provideToastr({
    timeOut: 10000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
  }),
  provideIcons({ heroUsers, heroArrowRightCircle, heroPlaySolid,heroWrenchScrewdriver,heroChartBar,heroChatBubbleOvalLeft, heroBars4,heroChevronDown,heroChevronUp, heroDocument, heroSquares2x2, heroPlusCircle, heroPercentBadge, heroCurrencyDollar, heroXMark }),
  ],};

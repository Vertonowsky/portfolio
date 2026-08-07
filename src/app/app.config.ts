import {ApplicationConfig, provideExperimentalZonelessChangeDetection} from '@angular/core';

import {provideTranslate} from "./language/language.provider";

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideTranslate()
  ]
};
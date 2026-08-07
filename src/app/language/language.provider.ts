import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { importProvidersFrom } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Language } from './language.enum';

import en from '../../assets/i18n/en.json';
import pl from '../../assets/i18n/pl.json';

const TRANSLATIONS: Record<string, unknown> = {
  [Language.ENGLISH]: en,
  [Language.POLISH]: pl
};

export class InlineTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<unknown> {
    return of(TRANSLATIONS[lang] ?? TRANSLATIONS[Language.ENGLISH]);
  }
}

export function provideTranslate() {
  return [
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useClass: InlineTranslateLoader
        }
      })
    )
  ];
}

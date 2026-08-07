import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { importProvidersFrom } from '@angular/core';
import { Observable, from } from 'rxjs';
import { Language } from './language.enum';

const TRANSLATIONS: Record<string, () => Promise<{ default: unknown }>> = {
  [Language.ENGLISH]: () => import('../../assets/i18n/en.json'),
  [Language.POLISH]: () => import('../../assets/i18n/pl.json')
};

export class InlineTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<unknown> {
    const load = TRANSLATIONS[lang] ?? TRANSLATIONS[Language.ENGLISH];
    return from(load().then(module => module.default));
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
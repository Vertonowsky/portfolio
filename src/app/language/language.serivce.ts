import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './language.enum';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly LANGUAGE_COOKIE = 'language';

  constructor(private translate: TranslateService) {
    translate.addLangs([Language.ENGLISH, Language.POLISH]);

    const browserLang = translate.getBrowserLang();
    const lang : Language = browserLang === 'pl' ? Language.POLISH : Language.ENGLISH;
    const cookieLanguage = this.readCookie(this.LANGUAGE_COOKIE) as Language;
    const initialLanguage = cookieLanguage ? cookieLanguage : lang;

    translate.setDefaultLang(initialLanguage);
    this.setLanguage(initialLanguage);
  }

  setLanguage(language: Language) {
    this.writeCookie(this.LANGUAGE_COOKIE, language);
    this.translate.use(language);
  }

  getLanguage(): Language {
    return this.translate.currentLang as Language;
  }

  private readCookie(name: string): string {
    return document.cookie
      .split('; ')
      .find(cookie => cookie.startsWith(`${name}=`))
      ?.split('=')[1] ?? '';
  }

  private writeCookie(name: string, value: string) {
    const oneYearInSeconds = 365 * 24 * 60 * 60;
    document.cookie = `${name}=${value};path=/;max-age=${oneYearInSeconds};SameSite=Lax`;
  }
}

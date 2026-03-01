import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {BannerComponent} from "./banner/banner.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {ProjectsComponent} from "./projects/projects.component";
import {TimelineComponent} from "./timeline/timeline.component";
import {ContactComponent} from "./contact/contact.component";
import {FooterComponent} from "./footer/footer.component";
import {Language} from "./language/language.enum";
import {LanguageService} from "./language/language.serivce";
import {TranslateService} from "@ngx-translate/core";
import {TechnologyComponent} from "./technology/technology.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, AboutMeComponent, ProjectsComponent, TimelineComponent, ContactComponent, FooterComponent, TechnologyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  selectedLanguage: Language;

  constructor(private translate: TranslateService, private languageService: LanguageService) {
    this.selectedLanguage = this.languageService.getLanguage();
  }

  switchLanguage(language: Language) {
    if (this.languageService.getLanguage() == language)
      return;

    this.selectedLanguage = language;
    this.languageService.setLanguage(language);
  }

}

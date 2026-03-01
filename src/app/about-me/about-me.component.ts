import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {EducationComponent} from "./education/education.component";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {AppModule} from "../app.module";
import {ScholarshipComponent} from "./scholarship/scholarship.component";
import {AboutMe} from "./about-me.model";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    NgForOf,
    EducationComponent,
    TranslateModule,
    AppModule,
    ScholarshipComponent,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})


export class AboutMeComponent {

  model?: AboutMe;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.stream('aboutMe').subscribe((data: AboutMe) => {
      this.model = data;
    });
  }

}

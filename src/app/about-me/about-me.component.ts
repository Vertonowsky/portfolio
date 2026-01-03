import { Component } from '@angular/core';
import {TechnologyComponent} from "./technology/technology.component";
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
    TechnologyComponent,
    NgForOf,
    EducationComponent,
    TranslateModule,
    AppModule,
    ScholarshipComponent
  ],
  templateUrl: './about-me.component.html',
  styleUrls: [
    './about-me.component.css',
    'technology/technology.component.css',
  ]
})


export class AboutMeComponent {

  model?: AboutMe;

  constructor(private translate: TranslateService) {}

  activeSwipeIndexes: number[] = [];
  animationDuration = 3000; // animation duration in ms

  ngOnInit() {
    this.translate.stream('aboutMe').subscribe((data: AboutMe) => {
      this.model = data;

      this.triggerNextSwipe();
    });
  }

  // glow animation
  triggerNextSwipe() {
    if (this.model == undefined) {
      console.log(this.model)
      return;
    }

    const count = 3;
    const indexes = new Set<number>();

    while (indexes.size < count) {
      indexes.add(Math.floor(Math.random() * this.model.technologies.length));
    }

    this.activeSwipeIndexes = Array.from(indexes);

    setTimeout(() => {
      this.activeSwipeIndexes = [];
      this.triggerNextSwipe();
    }, this.animationDuration);
  }

}

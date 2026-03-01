import {Component} from '@angular/core';
import {TechnologySection} from "./technology.model";
import {TranslateService} from "@ngx-translate/core";
import {AppModule} from "../app.module";
import {NgForOf} from "@angular/common";
import {TechnologyItemComponent} from "./technology-item/technology-item.component";

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [
    AppModule,
    NgForOf,
    TechnologyItemComponent
  ],
  templateUrl: './technology.component.html',
  styleUrls: [
    './technology.component.css',
    './technology-item/technology-item.component.css'
  ]
})
export class TechnologyComponent {

  model?: TechnologySection;

  constructor(private translate: TranslateService) {}

  activeSwipeIndexes: number[] = [];
  animationDuration = 3000; // animation duration in ms
  swipeTimeout?: number;


  ngOnInit() {
    this.translate.stream('technologySection').subscribe((data: TechnologySection) => {
      this.model = data;
      this.restartAnimation();
    });
  }

  restartAnimation() {
    this.stopAnimation();
    this.triggerNextSwipe();
  }

  stopAnimation() {
    if (this.swipeTimeout) {
      clearTimeout(this.swipeTimeout);
      this.swipeTimeout = undefined;
    }
  }

  triggerNextSwipe() {
    if (!this.model)
      return;

    const count = 3;
    const indexes = new Set<number>();

    while (indexes.size < count) {
      indexes.add(
        Math.floor(Math.random() * this.model.technologies.length)
      );
    }

    this.activeSwipeIndexes = Array.from(indexes);

    this.swipeTimeout = window.setTimeout(() => {
      this.activeSwipeIndexes = [];
      this.triggerNextSwipe();
    }, this.animationDuration);
  }

}

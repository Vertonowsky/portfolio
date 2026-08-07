import {ChangeDetectorRef, Component, HostListener, Input, OnInit} from '@angular/core';
import {AppModule} from "../app.module";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {ProjectSection} from "./projects.model";
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";
import {ProjectImageComponent} from "./project-image/project-image.component";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    AppModule,
    TranslateModule,
    NgForOf,
    NgClass,
    ProjectItemComponent,
    ProjectImageComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  private readonly MIN_SWIPE_DISTANCE = 50;
  private xStart: number | null = null;

  @Input() activeIndex : number = 0;

  model?: ProjectSection;

  constructor(private translate: TranslateService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.translate.stream('projectSection').subscribe((data: ProjectSection) => {
      this.model = data;
      this.changeDetector.markForCheck();
    });
  }


  specificSlide(index: number): void {
    if (index === this.activeIndex) return;

    this.activeIndex = index;
  }

  nextSlide(): void {
    if (this.model == undefined)
      return;

    this.activeIndex = (this.activeIndex + 1) % this.model.projects.length;
  }

  previousSlide(): void {
    if (this.model == undefined)
      return;

    this.activeIndex = (this.activeIndex - 1 + this.model.projects.length) % this.model.projects.length;
  }

  isNext(index: number): boolean {
    if (this.model == undefined)
      return false;

    return (this.activeIndex + 1) % this.model.projects.length === index;
  }

  isFuture(index: number): boolean {
    return index !== this.activeIndex && !this.isNext(index);
  }

  classList(index: number): string[] {
    const classes : string[] = [];
    if (index === this.activeIndex)
      classes.push('active');

    if (this.isNext(index))
      classes.push('next');

    if (this.isFuture(index))
      classes.push('future');

    return classes;
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(evt: TouchEvent): void {
    this.xStart = evt.touches[0].clientX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(evt: TouchEvent): void {
    if (this.xStart === null) return;

    const xEnd = evt.changedTouches[0].clientX;
    const xDiff = this.xStart - xEnd;

    if (Math.abs(xDiff) > this.MIN_SWIPE_DISTANCE) {
      if (xDiff > 0) {
        // Swipe left
        this.nextSlide();
      } else {
        // Swipe right
        this.previousSlide();
      }
    }
  }

}

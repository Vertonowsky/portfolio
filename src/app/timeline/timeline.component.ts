import { Component } from '@angular/core';
import {AppModule} from "../app.module";
import {NgForOf, NgIf} from "@angular/common";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {Timeline} from "./timeline.model";

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    AppModule,
    NgForOf,
    TranslateModule,
    NgIf
  ],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {

  timeline!: Timeline;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.get('timeline').subscribe((data: Timeline) => {
      this.timeline = data;
    });
  }

}

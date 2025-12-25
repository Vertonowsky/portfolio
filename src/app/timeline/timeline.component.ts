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

  model?: Timeline;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.stream('timeline').subscribe((data: Timeline) => {
      this.model = data;
    });
  }

}

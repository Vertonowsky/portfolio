import { Component } from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {Banner} from "./banner.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    TranslateModule,
    NgIf
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  model?: Banner;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.stream('banner').subscribe((data: Banner) => {
      this.model = data;
    });
  }

}

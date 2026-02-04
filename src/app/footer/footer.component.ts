import { Component } from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {Footer} from "./footer.model";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TranslateModule,
    NgIf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  model?: Footer;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.translate.stream('footer').subscribe((data: Footer) => {
      this.model = data;
    });
  }

}

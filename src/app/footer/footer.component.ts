import { ChangeDetectorRef, Component } from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {Footer} from "./footer.model";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TranslateModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  currentYear = new Date().getFullYear();
  model?: Footer;

  constructor(private translate: TranslateService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.translate.stream('footer').subscribe((data: Footer) => {
      this.model = data;
      this.changeDetector.markForCheck();
    });
  }

}

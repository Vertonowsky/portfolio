import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {Scholarship} from "./scholarship.model";

@Component({
  selector: 'app-scholarship',
  standalone: true,
  imports: [
    NgClass,
    TranslateModule
  ],
  templateUrl: './scholarship.component.html',
  styleUrl: './scholarship.component.css'
})
export class ScholarshipComponent {

  @Input() scholarship!: Scholarship;

}

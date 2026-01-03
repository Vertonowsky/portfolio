import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {University} from "./education.model";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    NgClass,
    TranslateModule
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

  @Input() university!: University;

}

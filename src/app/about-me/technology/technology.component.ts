import {Component, Input} from '@angular/core';
import {Technology} from "./technology.model";

@Component({
  selector: 'app-technology',
  standalone: true,
  imports: [],
  templateUrl: './technology.component.html',
  styleUrl: './technology.component.css'
})
export class TechnologyComponent {

  @Input() technology!: Technology;

}

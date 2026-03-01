import {Component, Input} from '@angular/core';
import {Technology} from "../technology.model";

@Component({
  selector: 'app-technology-item',
  standalone: true,
  imports: [],
  templateUrl: './technology-item.component.html',
  styleUrl: './technology-item.component.css'
})
export class TechnologyItemComponent {

  @Input() technology!: Technology;

}

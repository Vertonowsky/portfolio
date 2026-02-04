import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {Project, ProjectSection} from "../projects.model";

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [
    NgForOf,
    TranslateModule,
  ],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {

  @Input() project!: Project;
  @Input() model!: ProjectSection | undefined;

}

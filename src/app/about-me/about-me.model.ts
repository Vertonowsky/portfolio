import {University} from "./education/education.model";
import {Technology} from "./technology/technology.model";
import {Scholarship} from "./scholarship/scholarship.model";

export interface AboutMe {
  title: string;
  technologiesTitle: string;
  technologies: Technology[];
  universities: University[];
  scholarships: Scholarship[];
}

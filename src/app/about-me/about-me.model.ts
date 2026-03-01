import {University} from "./education/education.model";
import {Scholarship} from "./scholarship/scholarship.model";

export interface AboutMe {
  title: string;
  technologiesTitle: string;
  universities: University[];
  scholarships: Scholarship[];
}

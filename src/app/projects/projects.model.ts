export interface ProjectSection {
  title: string;
  projects: Project[];
  projectImages: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  sourceCodes: ExternalButton[];
}

export interface ExternalButton {
  value: string;
  url: string;
}

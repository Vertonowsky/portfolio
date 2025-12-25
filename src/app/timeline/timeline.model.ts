export interface Timeline {
  title: string;
  currentJobTitle: string;
  jobs: Job[];
}

export interface Job {
  title: string;
  steps: string[];
  icon: string;
  date: string;
  company: string;
  technologies: string[];
  promotions?: Promotion[];
  current?: boolean;
}

export interface Promotion {
  date: string;
  title: string;
  current?: boolean;
}

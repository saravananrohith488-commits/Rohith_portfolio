export type SkillLevel = 'Familiar' | 'Intermediate' | 'Comfortable' | 'Learning';

export interface Skill {
  name: string;
  category: 'languages' | 'web' | 'cybersecurity' | 'tools';
  level?: SkillLevel;
  icon?: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Cybersecurity' | 'Digital Forensics' | 'Authentication' | 'Android / GPS' | 'Hardware Experiment' | 'C / C++ Systems';
  shortDesc: string;
  problemStatement: string;
  solution: string;
  technologies: string[];
  keyFeatures: string[];
  status: 'In Development' | 'Completed' | 'Educational Experiment' | 'Academic Project';
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface Achievement {
  title: string;
  event: string;
  organization: string;
  department: string;
  date: string;
  prize: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  items: string[];
  highlight?: boolean;
}

export interface DSAConcept {
  category: 'Data Structures' | 'Algorithms';
  title: string;
  items: string[];
}

export interface CSCoreTopic {
  title: string;
  concepts: string[];
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  client?: string;
  tagline: string;
  description: string;
  imageUrl: string;
  tools: string[];
  skills: string[];
  deliverables: string[];
  overview: string;
  objective: string;
  role: string;
  responsibilities: string[];
  designProcess: string[];
  finalResult: string;
  drawingCode?: string;
  scale?: string;
  sheetSize?: string;
}

export interface SkillCategoryItem {
  id: string;
  category: string;
  description: string;
  skills: {
    name: string;
    details: string;
  }[];
}

export interface AutoCADFeatureItem {
  number: string;
  title: string;
  description: string;
  layerName: string;
  standard: string;
  workflowStep: string;
}

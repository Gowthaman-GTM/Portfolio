export interface Skill {
  name: string;
  category: 'Programming' | 'Web / Backend' | 'Database' | 'Mobile' | 'Tools' | 'Cybersecurity';
  level: 'Learning' | 'Intermediate' | 'Proficient' | 'Fundamental';
  icon?: string;
}

export interface SkillCategory {
  title: 'Programming' | 'Web / Backend' | 'Database' | 'Mobile' | 'Tools' | 'Cybersecurity';
  skills: Skill[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  expectedGraduation?: string;
  achievements?: string[];
  coursework?: string[];
  activities?: string[];
  isUniversity?: boolean;
}

export interface ExperienceCategory {
  type: 'Academic Projects' | 'Freelance Work' | 'Volunteer Work' | 'Leadership Experience' | 'University Activities';
  items: {
    title: string;
    organizationOrRole: string;
    period: string;
    description: string;
    highlights?: string[];
    isPlaceholder?: boolean;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  isPlaceholder: boolean;
}

export interface CertificationItem {
  name: string;
  issuingOrganization: string;
  year: string;
  credentialLink: string;
  category: 'Professional Certifications' | 'Online Courses' | 'Workshops' | 'Hackathons & Competitions' | 'Awards & Achievements';
  isPlaceholder?: boolean;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  linkedIn: string;
  gitHub: string;
  location: string;
}

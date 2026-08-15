import type { ContactInfo, EducationItem, ExperienceCategory, ProjectItem, SkillCategory, CertificationItem } from '../types/portfolio';

export const personalInfo = {
  name: "Atputhathevarajah Gowthaman",
  title: "IT Undergraduate | AI & Machine Learning Enthusiast",
  tagline: "AI & Machine Learning Enthusiast | Software Development",
  university: "University of Kelaniya",
  degree: "BSc (Hons) in Information Technology (Reading)",
  graduationYear: "2029",
  shortIntro: "I have a strong interest in software development and computer programming, with a focus on Artificial Intelligence and Machine Learning.",
  aboutText: "I have a strong interest in software development and computer programming, with a focus on Artificial Intelligence and Machine Learning. As an AI & Machine Learning enthusiast, I continuously learn new technologies and strengthen my technical knowledge. I am seeking an opportunity to gain practical experience, work on real projects, and apply AI and ML concepts to develop real-world solutions while contributing to the technical growth of an organization.",
  careerInterests: ["Software Development", "Artificial Intelligence & ML", "Cybersecurity & Network Defense", "IoT Systems", "Web & Mobile Applications"],
  technicalInterests: ["Object-Oriented Programming", "RESTful API Architecture", "Database Management", "Linux Administration", "C++ & Java Systems"],
  strengths: ["Problem Solving", "Time Management", "Effective Communication", "Critical Thinking"],
  futureGoal: "To grow into a versatile Software Engineer & AI/ML Specialist, contributing to innovative enterprise solutions and cutting-edge technology platforms."
};

export const contactInfo: ContactInfo = {
  email: "AtputhathevarajahGowthaman5545@gmail.com",
  phone: "0771372806",
  linkedIn: "https://www.linkedin.com/in/gowthaman-atputhathevarajah",
  gitHub: "https://github.com/Gowthaman-GTM",
  location: "Sri Lanka"
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: [
      { name: "Java", category: "Programming", level: "Proficient" },
      { name: "Python", category: "Programming", level: "Intermediate" },
      { name: "C++", category: "Programming", level: "Intermediate" },
      { name: "JavaScript", category: "Programming", level: "Proficient" },
      { name: "CSS", category: "Programming", level: "Proficient" }
    ]
  },
  {
    title: "Web / Backend",
    skills: [
      { name: "HTML", category: "Web / Backend", level: "Proficient" },
      { name: "CSS", category: "Web / Backend", level: "Proficient" },
      { name: "JavaScript", category: "Web / Backend", level: "Proficient" },
      { name: "REST APIs", category: "Web / Backend", level: "Intermediate" },
      { name: "Spring Boot", category: "Web / Backend", level: "Intermediate" }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", category: "Database", level: "Proficient" }
    ]
  },
  {
    title: "Mobile",
    skills: [
      { name: "Android", category: "Mobile", level: "Intermediate" },
      { name: "Kotlin", category: "Mobile", level: "Intermediate" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", category: "Tools", level: "Proficient" },
      { name: "GitHub", category: "Tools", level: "Proficient" },
      { name: "Android Studio", category: "Tools", level: "Intermediate" },
      { name: "VS Code", category: "Tools", level: "Proficient" }
    ]
  },
  {
    title: "Cybersecurity",
    skills: [
      { name: "Networking Fundamentals", category: "Cybersecurity", level: "Fundamental" },
      { name: "Linux", category: "Cybersecurity", level: "Intermediate" },
      { name: "Cybersecurity Fundamentals", category: "Cybersecurity", level: "Fundamental" }
    ]
  }
];

export const projectItems: ProjectItem[] = [
  {
    id: "project-1",
    title: "Task Management System",
    category: "Web Application • Team Project",
    description: "Collaborative web application built as a team project for efficient task management, featuring task creation, team member assignments, real-time status tracking, and milestone progress monitoring.",
    tags: ["Web App", "Team Project", "JavaScript", "HTML/CSS", "Database"],
    githubUrl: "https://github.com/Gowthaman-GTM",
    demoUrl: "#",
    isPlaceholder: false
  },
  {
    id: "project-2",
    title: "Employee Leave Management System",
    category: "Software Development",
    description: "Developed a Java-based OOP system to manage employee records, leave requests, and leave approval using Java, MySQL, and JDBC.",
    tags: ["Java", "MySQL", "JDBC", "OOP"],
    githubUrl: "https://github.com/Gowthaman-GTM",
    demoUrl: "#",
    isPlaceholder: false
  },
  {
    id: "project-3",
    title: "Console Game Development",
    category: "Software Development",
    description: "Developed a console-based application using C++ to strengthen core programming fundamentals, object-oriented concepts, and algorithmic problem solving.",
    tags: ["C++", "Console App", "OOP", "Data Structures"],
    githubUrl: "https://github.com/Gowthaman-GTM",
    demoUrl: "#",
    isPlaceholder: false
  }
];

export const educationItems: EducationItem[] = [
  {
    institution: "University of Kelaniya",
    degree: "BSc (Hons) in Information Technology (Reading)",
    period: "2025 - 2029",
    expectedGraduation: "2029",
    isUniversity: true,
    coursework: [
      "Department of Industrial Management",
      "Programming Fundamentals & Object-Oriented Programming (Java, C++)",
      "Data Structures & Algorithms",
      "Database Management Systems (MySQL)",
      "Web Technologies & Artificial Intelligence / Machine Learning"
    ],
    achievements: [
      "IT Undergraduate Student",
      "Active Member of AIESEC",
      "AI & Machine Learning Enthusiast"
    ]
  },
  {
    institution: "DMI Computer Education, Jaffna",
    degree: "Diploma in Information Technology",
    period: "Completed",
    isUniversity: false,
    achievements: [
      "Comprehensive training in Computer Fundamentals & IT Skills"
    ]
  },
  {
    institution: "DMI Computer Education, Jaffna",
    degree: "Diploma in Fluent English",
    period: "Completed",
    isUniversity: false,
    achievements: [
      "Professional English Proficiency & Communication Skills"
    ]
  }
];

export const experienceCategories: ExperienceCategory[] = [
  {
    type: "Academic Projects",
    items: [
      {
        title: "Task Management System & Academic Projects",
        organizationOrRole: "University of Kelaniya Coursework (Team & Individual)",
        period: "2025",
        description: "Collaborated in a student team to build a web-based Task Management System alongside individual OOP Java and C++ application projects.",
        highlights: [
          "Co-developed a Web-based Task Management System application in a team environment",
          "Implemented Object-Oriented Programming (OOP) design patterns in Java and C++",
          "Designed relational database schemas and connected Java via JDBC with MySQL",
          "Collaborated using Git version control and team-based development workflows"
        ],
        isPlaceholder: false
      }
    ]
  },
  {
    type: "Volunteer Work",
    items: [
      {
        title: "AIESEC Member",
        organizationOrRole: "AIESEC",
        period: "Present",
        description: "Active member of AIESEC, contributing to youth leadership development, global volunteer initiatives, cross-cultural understanding, and team event operations.",
        highlights: [
          "Engaging in youth leadership development and team-building workshops",
          "Participating in cross-cultural exchange programs and community outreach initiatives",
          "Collaborating with cross-functional student teams on organizational event management"
        ],
        isPlaceholder: false
      }
    ]
  },
  {
    type: "Leadership Experience",
    items: [
      {
        title: "AIESEC Member & Team Contributor",
        organizationOrRole: "AIESEC",
        period: "Present",
        description: "Developing practical leadership, project coordination, and teamwork skills through active participation in AIESEC committees and campus programs.",
        highlights: [
          "Participating in team planning sessions, leadership workshops, and goal execution",
          "Fostering effective communication and collaborative problem solving across university teams"
        ],
        isPlaceholder: false
      }
    ]
  },
  {
    type: "University Activities",
    items: [
      {
        title: "AIESEC Member & Campus Engagement",
        organizationOrRole: "University of Kelaniya",
        period: "2025 - Present",
        description: "Actively involved in AIESEC and IT department activities, participating in technical workshops, peer coding, and student engagement sessions.",
        highlights: [
          "Active engagement in AIESEC student network activities and leadership events",
          "Participating in PPD II professional development sessions and university tech seminars"
        ],
        isPlaceholder: false
      }
    ]
  },
  {
    type: "Freelance Work",
    items: [
      {
        title: "Software & IT Technical Assistance",
        organizationOrRole: "Self-Employed",
        period: "2025 - Present",
        description: "Providing software troubleshooting, web application development assistance, and technical consultation for academic peers and small projects.",
        highlights: [
          "Assisted peers with Java, Python, and C++ programming assignments and debugging",
          "Provided database design guidance and web application troubleshooting"
        ],
        isPlaceholder: false
      }
    ]
  }
];

export const certificationItems: CertificationItem[] = [
  {
    name: "[Certification Name]",
    issuingOrganization: "[Issuing Organization]",
    year: "[Year]",
    credentialLink: "[Credential Link]",
    category: "Professional Certifications",
    isPlaceholder: true
  },
  {
    name: "[Online Course Title]",
    issuingOrganization: "[Coursera / Udemy / LinkedIn Learning]",
    year: "[Year]",
    credentialLink: "[Credential Link]",
    category: "Online Courses",
    isPlaceholder: true
  },
  {
    name: "[Workshop / Seminar Title]",
    issuingOrganization: "[University / Industry Host]",
    year: "[Year]",
    credentialLink: "[Credential Link]",
    category: "Workshops",
    isPlaceholder: true
  },
  {
    name: "[Hackathon / Competition Name]",
    issuingOrganization: "[Organizer Name]",
    year: "[Year]",
    credentialLink: "[Credential Link]",
    category: "Hackathons & Competitions",
    isPlaceholder: true
  },
  {
    name: "[Academic Award / Achievement]",
    issuingOrganization: "[University / School Name]",
    year: "[Year]",
    credentialLink: "[Credential Link]",
    category: "Awards & Achievements",
    isPlaceholder: true
  }
];

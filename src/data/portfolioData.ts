import type { Project, Achievement, TimelineEvent, DSAConcept, CSCoreTopic } from '../types';

export const PERSONAL_INFO = {
  name: 'Rohtih',
  title: 'Cyber Security Student | Developer | Tech Enthusiast',
  tagline: 'Engineering student exploring cybersecurity, software development, networking and emerging technologies through hands-on projects.',
  education: 'B.E. Computer Science and Engineering — Cyber Security',
  college: 'Sri Krishna College of Engineering and Technology (SKCET), Coimbatore',
  graduationYear: '2029',
  location: 'Coimbatore, Tamil Nadu, India',
  status: 'B.E. CSE (Cyber Security) Student',
  brandingKeywords: [
    'Cyber Security',
    'Developer',
    'Problem Solver',
    'Security Enthusiast',
    'Tech Explorer'
  ],
  bioQuote: 'Curious by nature, technical by interest, and always building something.',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'rohtih.skcet@example.com'
  }
};

export const PROGRAMMING_LANGUAGES = [
  { name: 'C', level: 'Comfortable' as const, desc: 'Used for system-level programming, memory allocation, and DSA practice.' },
  { name: 'C++', level: 'Intermediate' as const, desc: 'Used for Data Structures & Algorithms, object-oriented concepts, and problem solving.' },
  { name: 'Java', level: 'Comfortable' as const, desc: 'Used for Object-Oriented Programming and Android mobile application development.' },
  { name: 'Python', level: 'Comfortable' as const, desc: 'Used for scripting, cybersecurity automation, data manipulation, and security research.' },
  { name: 'JavaScript', level: 'Intermediate' as const, desc: 'Used for dynamic web development, DOM manipulation, Fetch API, and REST API integration.' }
];

export const WEB_DEV_STACK = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'REST APIs', 'JSON',
  'Fetch API', 'Responsive Web Design', 'Frontend Development',
  'Bootstrap', 'TypeScript Concepts'
];

export const CYBERSECURITY_TOPICS = [
  { name: 'Cybersecurity Fundamentals', desc: 'Core principles of confidentiality, integrity, and availability (CIA Triad).' },
  { name: 'Network Security', desc: 'Understanding packet structures, protocols, traffic monitoring, and firewalls.' },
  { name: 'Authentication Security', desc: 'Exploring credential hashing, session management, and access controls.' },
  { name: 'Threat Analysis', desc: 'Identifying attack vectors, security risks, and digital fraud patterns.' },
  { name: 'Digital Fraud Investigation', desc: 'Preserving digital evidence, incident logging, and source tracing.' },
  { name: 'Vulnerability Analysis', desc: 'Analyzing security flaws in web applications and network devices.' },
  { name: 'Ethical Hacking Concepts', desc: 'Academic exploration of penetration testing methodologies.' },
  { name: 'Wi-Fi & IoT Security', desc: 'Hardware experimentation with ESP32 and wireless network concepts.' },
  { name: 'Linux System Security', desc: 'File permissions, process isolation, and CLI security tools.' }
];

export const TOOLS_AND_TECH = [
  { name: 'Linux', category: 'Operating System' },
  { name: 'Git', category: 'Version Control' },
  { name: 'GitHub', category: 'Code Hosting' },
  { name: 'VS Code', category: 'IDE' },
  { name: 'Android Studio', category: 'Mobile IDE' },
  { name: 'ESP32', category: 'Security Hardware' },
  { name: 'C/C++ Tools', category: 'Compilers (GCC/G++)' },
  { name: 'REST APIs & JSON', category: 'Data Exchange' },
  { name: 'Bootstrap', category: 'CSS Framework' },
  { name: 'TypeScript', category: 'Typed JS' }
];

export const PROJECTS: Project[] = [
  {
    id: 'digital-fraud-evidence',
    title: 'Digital Fraud Evidence Capture & Threat Database',
    category: 'Cybersecurity',
    shortDesc: 'A security application designed to log incidents, capture digital evidence, classify cyber attacks, and build a structured threat intelligence database.',
    problemStatement: 'Digital fraud incidents often lack immediate structured evidence preservation, making origin tracing and threat analysis difficult for security responders.',
    solution: 'Designed an incident logging system with evidence organization, attack classification, source tagging, and a historical database for threat analysis.',
    technologies: ['Python', 'JSON / Database', 'Cybersecurity Concepts', 'Threat Analysis', 'Web Interface'],
    keyFeatures: [
      'Structured incident logging & timestamping',
      'Digital evidence capture & organization',
      'Attack vector classification (Phishing, Spoofing, Credentials)',
      'Source & origin tagging mechanism',
      'Historical threat database queries for future analysis',
      'Secure evidence handling workflows'
    ],
    status: 'Academic Project',
    featured: true,
    githubUrl: 'https://github.com',
    demoUrl: undefined
  },
  {
    id: 'secure-credential-sharing',
    title: 'Secure Credential Sharing & Misuse-Risk Management',
    category: 'Authentication',
    shortDesc: 'A controlled credential management platform focused on permission-based access, access logging, and expiry-driven sharing.',
    problemStatement: 'Unrestricted credential sharing in organizations and small teams leads to unauthorized access, credential leakage, and misuse risks.',
    solution: 'Developed a conceptual credential vault with strict access controls, permission management, audit logs, and automatic access expiration.',
    technologies: ['Java', 'Security Control Logic', 'Access Control Lists', 'JSON', 'Encryption Concepts'],
    keyFeatures: [
      'Controlled credential sharing vault',
      'Granular permission management (Read/Use/Revoke)',
      'Time-based & expiry-driven access controls',
      'Detailed access audit logs & anomaly indicators',
      'Misuse-risk assessment dashboard'
    ],
    status: 'In Development',
    featured: true,
    githubUrl: 'https://github.com',
    demoUrl: undefined
  },
  {
    id: 'bike-tracking-analytics',
    title: 'Bike Tracking & Ride Analytics Application',
    category: 'Android / GPS',
    shortDesc: 'An Android mobile application for tracking motorcycle trips, recording real-time GPS statistics, and visualizing ride metrics.',
    problemStatement: 'Riders need a lightweight, accurate mobile application to monitor speed dynamics, ride history, and travel statistics without heavy hardware.',
    solution: 'Built an Android application using Java & Android Studio that interfaces with device GPS location services to calculate speed, distance, and time.',
    technologies: ['Android Studio', 'Java', 'Android Location API', 'GPS Services', 'UI Layouts'],
    keyFeatures: [
      'Real-time GPS ride tracking',
      'Speed metrics calculation (Top Speed & Average Speed)',
      'Travel time & distance counter',
      'Ride history log storage',
      'Interactive ride performance statistics overview'
    ],
    status: 'Completed',
    featured: true,
    githubUrl: 'https://github.com',
    demoUrl: undefined
  },
  {
    id: 'esp32-hardware-security',
    title: 'Cybersecurity Hardware & ESP32 Security Experiments',
    category: 'Hardware Experiment',
    shortDesc: 'Educational wireless security testing and network monitoring experiments using ESP32 microcontroller boards in controlled environments.',
    problemStatement: 'Understanding Wi-Fi protocols and hardware-level network packets requires practical hardware testing.',
    solution: 'Programmed ESP32 hardware modules to analyze wireless network signals, explore Wi-Fi frame structures, and research IoT security concepts.',
    technologies: ['ESP32 Microcontroller', 'C/C++ Arduino Core', 'Wi-Fi Protocols', 'Network Monitoring', 'IoT Security'],
    keyFeatures: [
      'Wireless network signal monitoring',
      'Wi-Fi frame structure inspection in laboratory setting',
      'IoT security testing in isolated hardware testbed',
      'Controlled security research experimentation',
      'Serial monitor packet telemetry display'
    ],
    status: 'Educational Experiment',
    featured: true,
    githubUrl: 'https://github.com',
    demoUrl: undefined
  }
];

export const CPP_DSA_PROJECTS = [
  { title: 'ATM Simulator', lang: 'C++', desc: 'Simulated multi-user ATM system with PIN verification, deposit, withdrawal, and transaction log balance tracking.' },
  { title: 'UPI Transaction Simulator', lang: 'C++', desc: 'Modeled UPI payment workflow with virtual handles, balance updates, and transaction success/failure states.' },
  { title: 'Treasure Hunt Solver (DFS)', lang: 'C++', desc: 'Graph traversal algorithm using Depth-First Search to navigate grid mazes and locate optimal paths.' },
  { title: 'Stack & Queue Systems', lang: 'C / C++', desc: 'Custom memory implementation of Linear Stacks, Linear Queues, and Circular Queues with boundary checks.' },
  { title: 'Linked List Suite', lang: 'C / C++', desc: 'Singly, Doubly, and Circular Linked Lists featuring node insertion, deletion, reversal, and position rearrangement.' },
  { title: 'Searching & Sorting Engine', lang: 'C++', desc: 'Performance comparison of Binary Search vs Linear Search, alongside Bubble, Selection, and Merge sort algorithms.' }
];

export const DSA_CONCEPTS: DSAConcept[] = [
  {
    category: 'Data Structures',
    title: 'Core Data Structures',
    items: [
      'Arrays (Static & Dynamic)',
      'Singly Linked Lists',
      'Doubly Linked Lists',
      'Circular Linked Lists',
      'Stacks (Array & Pointer based)',
      'Queues & Circular Queues',
      'Trees & Binary Search Trees (BST)',
      'Graphs (Adjacency Matrix & List)'
    ]
  },
  {
    category: 'Algorithms',
    title: 'Algorithmic Paradigms',
    items: [
      'Breadth-First Search (BFS)',
      'Depth-First Search (DFS)',
      'Binary Search & Linear Search',
      'Sorting Algorithms',
      'Asymptotic Analysis',
      'Big-O Notation & Time Complexity'
    ]
  }
];

export const CS_CORE_TOPICS: CSCoreTopic[] = [
  {
    title: 'Object-Oriented Programming (OOP)',
    concepts: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction', 'Class Hierarchies']
  },
  {
    title: 'Operating Systems & Linux',
    concepts: ['System Calls', 'Process Management', 'Paging & Memory Virtualization', 'Linux Terminal Operations', 'File System Permissions']
  },
  {
    title: 'Computer Networks',
    concepts: ['OSI & TCP/IP Stack', 'IP Addressing & Subnetting', 'HTTP/HTTPS & REST', 'Packet Formats', 'Socket Fundamentals']
  },
  {
    title: 'Computer Architecture & Memory',
    concepts: ['Von Neumann Architecture', 'CPU / GPU Execution Concepts', 'Instruction Sets', 'Paging & Cache Hierarchy', 'Parallel Computing Basics']
  }
];

export const LINUX_KNOWLEDGE = [
  { topic: 'Linux Terminal & Navigation', details: 'Fluent with CLI navigation (`cd`, `pwd`, `ls -la`), file manipulation, and process control.' },
  { topic: 'File System & Permissions', details: 'Understanding `chmod`, `chown`, file ownership, read/write/execute permissions, file types & sizes.' },
  { topic: 'Command Concepts', details: 'Familiar with essential Linux commands (`grep`, `find`, `cat`, `head`, `tail`, `ps`, `kill`, `systemctl`).' },
  { topic: 'System Operations', details: 'Basic system monitoring, directory management, and environment variable configuration.' }
];

export const ACHIEVEMENT: Achievement = {
  title: '2nd Prize — Engineer\'s Day Project Expo',
  event: 'Engineer\'s Day Project Expo 2025',
  organization: 'Sri Krishna College of Engineering and Technology (SKCET)',
  department: 'Department of CSE — Cyber Security, IoT and AI & ML',
  date: '15 September 2025',
  prize: '2nd Place Award',
  description: 'Awarded 2nd Prize for demonstrating technical innovation and practical problem solving in the department project showcase during Engineer\'s Day Expo at SKCET.'
};

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2025',
    title: 'Technical Foundation & Award Recognition',
    items: [
      'Began deep dive into cybersecurity principles and hands-on programming projects',
      'Participated in department technical project development',
      'Won 2nd Prize in Engineer\'s Day Project Expo at SKCET'
    ],
    highlight: true
  },
  {
    year: '2026',
    title: 'Core Cyber Security & Project Building',
    items: [
      'Expanding programming proficiency across C/C++, Java, Python, and JavaScript',
      'Developing cybersecurity applications (Fraud evidence logging & Credential Vault concept)',
      'Building Android mobile applications (Bike tracking & GPS analytics)',
      'Conducting educational cybersecurity hardware experiments with ESP32',
      'Practicing advanced Data Structures, Algorithms, and Linux system commands'
    ]
  },
  {
    year: '2029',
    title: 'Expected B.E. Graduation',
    items: [
      'Anticipated completion of B.E. Computer Science and Engineering — Cyber Security at SKCET, Coimbatore',
      'Preparing to contribute as a Cyber Security Engineer & Developer'
    ]
  }
];

export const INTEREST_AREAS = [
  'Cybersecurity',
  'Ethical Hacking Concepts',
  'Network Security',
  'Digital Forensics',
  'Threat Intelligence',
  'Software Development',
  'Web Development',
  'Android Development',
  'Programming',
  'Linux',
  'Networking',
  'IoT Security',
  'Security Research',
  'Emerging Technologies'
];

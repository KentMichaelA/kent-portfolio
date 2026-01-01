import { Shield, Cloud, Code, Server, Terminal, Database } from 'lucide-react';

export const personalInfo = {
  name: "Kent Michael Antony",
  title: "Security-Driven Software Engineer & Cloud Enthusiast",
  about: "I am a Computer Science student at National Taiwan Ocean University with a passion for building secure, scalable infrastructures. Integrating a growth mindset with technical expertise in automation, cybersecurity, and full-stack development, I aim to empower organizations by identifying growth opportunities and resolving complex technical blockers. I am committed to delivering optimized solutions that minimize business risks.",
  email: "kent.ma04@gmail.com",
  github: "https://github.com/KentMichaelA",
  location: "Keelung, Taiwan"
};

export const experiences = [
  {
    id: 1,
    role: "Web Developer Intern",
    company: "De He Yue International Technology Co., Ltd.",
    period: "Feb 2025 - July 2025",
    description: "Collaborated on front-end development using HTML, CSS, and JavaScript to optimize user interfaces, ensuring cross-platform compatibility and responsiveness. Responsible for troubleshooting system operations and debugging code.",
  }
];

export const projects = [
  {
    id: 1,
    title: "SOAR x EDR Automation",
    tech: ["LimaCharlie", "Tines", "SOC Automation", "Slack"],
    description: "Designed an automated SOC workflow to detect threats like LaZagne, streamlining incident response and reducing MTTR. Configured detection rules to automate endpoint isolation.",
    link: "https://shorturl.at/lYbVB"
  },
  {
    id: 2,
    title: "Ransomware Detection Tool",
    tech: ["Python", "XGBoost", "Explainable AI"],
    description: "Developed a detection model to identify ransomware patterns in EXE and DLL files. Integrated XAI to analyze attack vectors and improve threat interpretation for security decision-making.",
    link: "https://github.com/Geattt/XAI-Web"
  },
  {
    id: 3,
    title: "Active Directory Home Lab",
    tech: ["Windows Server 2022", "GPO", "Network Security"],
    description: "Deployed a simulated enterprise network architecture. Configured Group Policies and managed service accounts to enforce security domains and understand permissions management.",
    link: "#"
  }
];

export const certifications = [
  { 
    name: "Practical Junior Penetration Tester (PJPT)", 
    issuer: "TCM Security", 
    date: "Aug 2025",
    image: "certs/PJPT.webp"
  },
  { 
    name: "Practical Web Pentest Associate", 
    issuer: "TCM Security", 
    date: "Aug 2024",
    image: "certs/PWPA.webp"
  },
  { 
    name: "Google Cybersecurity Certificate", 
    issuer: "Coursera", 
    date: "Jul 2024",
    image: "certs/Google.webp"
  },
  { 
    name: "Hack The Box SOC Analyst Path", 
    issuer: "Hack The Box", 
    date: "Nov 2025",
    image: "certs/HTB.webp"
  }
];
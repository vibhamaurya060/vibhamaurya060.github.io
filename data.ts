import {
  Briefcase,
  Cloud,
  Code2,
  Coffee,
  Cpu,
  Database,
  GitBranch,
  Globe, 
  Layers,
  Layout,
  Mail,
  MapPin,
  Palette,
  Phone,
  Server, 
  Terminal,
} from "lucide-react";

import { FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa6";


export const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies Worked", value: "15+" },
  { label: "Coding Hours", value: "1200+" },
];

export const highlights = [
  { icon: MapPin, text: "Based in Mumbai, India" },
  { icon: Briefcase, text: "Open for Full-Stack Opportunities" },
  { icon: Code2, text: "Passionate about scalable web apps" },
  { icon: Coffee, text: "Powered by coffee & creativity" },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yourmail@example.com",
    href: "mailto:yourmail@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
    href: "#",
  },
];

export const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/yourusername",
    label: "Twitter",
  },
];

export const experiences = [
  {
    type: "work",
    title: "Frontend Developer",
    company: "Tech Company",
    period: "2025 - Present",
    description:
      "Building responsive and scalable web applications using Next.js, TypeScript, and Tailwind CSS.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
    ],
  },

  {
    type: "project",
    title: "Full-Stack Developer",
    company: "Personal & Freelance Projects",
    period: "2024 - Present",
    description:
      "Developed full-stack applications with authentication, APIs, dashboards, and database integration.",
    technologies: [
      "Node.js",
      "Fastify",
      "PostgreSQL",
      "Prisma",
    ],
  },

  {
    type: "education",
    title: "Bachelor's Degree",
    company: "Your College Name",
    period: "2021 - 2025",
    description:
      "Focused on web development, databases, software engineering, and modern JavaScript technologies.",
    technologies: [
      "JavaScript",
      "DBMS",
      "OOPs",
      "Web Development",
    ],
  },
];

export const footerSocialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/yourusername",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com/yourusername",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:yourmail@example.com",
    label: "Email",
  },
];

export const projects = [
  {
    title: "Learning Management System",
    description:
      "A scalable LMS platform with authentication, course management, dashboards, and secure APIs.",
    image: "/images/p1.jpg",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },

  {
    title: "ResultGuru Educational Platform",
    description:
      "Educational website providing government job notifications, admit cards, results, and exam updates.",
    image: "/images/p2.jpg",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },

  {
    title: "Event Management System",
    description:
      "Full-stack event management app with CRUD operations, capacity management, and MongoDB integration.",
    image: "/images/p3.jpg",
    techStack: [
      "Express.js",
      "MongoDB",
      "Node.js",
      "Mongoose",
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },

  {
    title: "Recipe Sharing App",
    description:
      "Modern recipe platform with authentication, recipe analytics, and archive management.",
    image: "/images/p4.jpg",
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },

  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website with animations, responsive UI, dark mode, and project showcase.",
    image: "/images/p5.jpg",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "TypeScript",
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },

  {
    title: "Book Rental System",
    description:
      "Backend system for book rental management with Mongoose relationships and CRUD functionality.",
    image: "/images/p6.jpg",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
    ],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: Code2 },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: Terminal },
      { name: "JavaScript", icon: Cpu },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Framer Motion", icon: Layout },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Layers },
      { name: "Fastify", icon: Cloud },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Prisma ORM", icon: Cpu },
    ],
  },

  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "Docker", icon: Server },
      { name: "AWS", icon: Cloud },
      { name: "Linux", icon: Terminal },
      { name: "REST APIs", icon: Globe },
      { name: "Figma", icon: Palette },
    ],
  },
];
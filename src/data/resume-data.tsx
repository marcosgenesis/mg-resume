import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Marcos Gênesis da Silva",
  initials: "MG",
  location: "Horizonte, Ceará - Brasil",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/49327985?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "marcosgenesisof@gmail.com",
    tel: "(85) 992855994",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/marcosgenesis",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/marcosgenesis/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidade Federal do Ceará",
      degree: "Bacharelado em Engenharia de Software, com foco em qualidade de Software. Bolsista PIBIT responsável pela criação da ferramenta CIref, um visualizador de refatorações executadas em projetos JAVA.",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Sossego",
      link: "#",
      badges: ["Remoto"],
      title: "Mid Frontend Software Developer",
      // logo: ParabolLogo,
      start: "2020",
      end: "",
      description:
        "Peça chave na criação e aprimoramento de dois softwares vitais para a experiência dos clientes da empresa. Colaborei ativamente em iniciativas de inovação, definição de tecnologias, desenvolvimento e otimização das plataformas.",
    },
    {
      company: "Maiself",
      link: "https://clevertech.biz",
      badges: ["Remoto"],
      title: "Co-Founder",
      logo: ClevertechLogo,
      start: "2019",
      end: "2022",
      description:
        "Responsável por liderar a equipe de tecnologia no desenvolvimento do produto, visão estratégica da empresa e definição de KPI's.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Vite",
    "Node.js/Nestjs",
  ],
  projects: [
    {
      title: "Veacos",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TRPC",
        "NextAuth"
      ],
      description: "Uma plataforma para gerenciar as dívidas que devem a você.",
      logo: ConsultlyLogo,
      link: {
        label: "veacos.com",
        href: "https://veacos.com/",
      },
    },
    {
      title: "See u",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "TRPC",
        "NextAuth"
      ],
      description: "Ferramenta para publicar e visualizar segredos de forma anônima e aleatória.",
      logo: ConsultlyLogo,
      link: {
        label: "veacos.com",
        href: "https://veacos.com/",
      },
    },
  ],
} as const;

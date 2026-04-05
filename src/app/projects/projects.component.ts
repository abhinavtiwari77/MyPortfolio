import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: Array<any> = [
    {
      name: "Portfolio",
      description: "A personal portfolio website designed to display my development skills and projects. This highlights my proficiency in Angular, and more.",
      image: "assets/img/portfolioimg.png",
      github: "",
      view: "",
      status: false,
      date: "January - 2026",
      demo: false,
      personal: true,
      tech: [
        {
          name: "Angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Flowbite",
          image: "assets/img/flowbite.svg",
        },
        {
          name: "Typescript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "Figma",
          image: "assets/img/figma.svg",
        },
      ]
    },
    {
      name: "Structify",
      description: "A powerful Data Structure and Algorithm Visualizer built using React, ShadCN UI, and Sonner for a beautiful, interactive, and educational experience. Perfect for students, educators, and developers",
      image: "assets/img/dsavis.png",
      github: false,
      view: "https://structifyy.netlify.app/",
      status: true,
      date: "May - Present",
      demo: false,
      tech: [
        {
          name: "TypeScript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "TailwindCss",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "React",
          image: "assets/img/reactjs.svg",
        },
        {
          name: "ShadCN UI",
          image: "assets/img/shadcn.png",
        },
      ]
    },
    {
      name: "PingUp",
      description: "PingUp - A social platform that combines community engagement with mental wellness features.",
      image: "assets/img/Ping.png",
      github: "https://github.com/abhinavtiwari77/HealWell_Backend",
      view: "",
      status: true,
      date: "october - Present",
      demo: false,
      tech: [
        {
          name: "MongoDB",
          image: "assets/img/mongodb.svg",
        },
        {
          name: "Express.js",
          image: "assets/img/express.png",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Reactjs",
          image: "assets/img/reactjs.svg",
        },
        {
          name: "Node.js",
          image: "assets/img/nodejs.svg",
        },
      ]
    },
    {
      name: "LawEase",
      description: "A multilingual legal assistant that simplifies law and makes legal information easy to understand for everyone.",
      image: "assets/img/lawease.png",
      github: "https://github.com/abhinavtiwari77/LawEase",
      view: "",
      status: true,
      date: "August - Present",
      demo: false,
      tech: [
        {
          name: "MongoDB",
          image: "assets/img/mongodb.svg",
        },
        {
          name: "Express.js",
          image: "assets/img/express.png",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Reactjs",
          image: "assets/img/reactjs.svg",
        },
        {
          name: "Node.js",
          image: "assets/img/nodejs.svg",
        },
      ]
    },
    {
      name: "Pixels",
      description: "An open-source, web-based graphic design editor.",
      image: "assets/img/Pixels.png",
      github: "https://github.com/abhinavtiwari77/pixels",
      view: false,
      status: false,
      date: "June - 2025",
      demo: false,
      personal: false,
      tech: [
        {
          name: "TypeScript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "TailwindCSS",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Framer Motion",
          image: "assets/img/FramerM.webp",
        },
        {
          name: "Vite",
          image: "assets/img/vitejs.svg",
        },
      ]
    },
    {
      name: "Spyder",
      description: " Spyder, an AI-powered Security SuiteA real-time content moderation and threat detection platform achieving.",
      image: "assets/img/spyder.png",
      github: "https://github.com/abhinavtiwari77/Spyder---Undefined---Binary-Blitz-2.0-Project",
      view: false,
      status: false,
      date: "April - 2025",
      demo: false,
      personal: false,
      tech: [
        {
          name: "Nodejs",
          image: "assets/img/nodejs.svg",
        },
        {
          name: "Reactjs",
          image: "assets/img/reactjs.svg",
        },
        {
          name: "TailwindCSS",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "NextUI",
          image: "assets/img/NextUI.jpg",
        },
      ]
    },
    {
      name: "AchieveIt",
      description: "Showcase your work, skills, and achievements with our website AchieveIt. Stand out in the digital world with a stunning portfolio website.",
      image: "assets/img/AchieveIt.png",
      github: "https://github.com/abhinavtiwari77/AchieveIt",
      view: "",
      status: false,
      date: "January - 2025",
      demo: false,
      tech: [
        {
          name: "PHP",
          image: "assets/img/php.svg",
        },
        {
          name: "MySql",
          image: "assets/img/mysql.svg",
        },
        {
          name: "HTML",
          image: "assets/img/html5.svg",
        },
        {
          name: "CSS",
          image: "assets/img/css3.svg",
        },
      ]
    },
    {
      name: "Taskly",
      description: "This is TODO App for cross platforms i.e. (Ios and android) built using React Native",
      image: "assets/img/DailyTask.png",
      github: "https://github.com/abhinavtiwari77/TD_ReactNative",
      view: "",
      status: false,
      date: "December - 2024",
      demo: false,
      tech: [
        {
          name: "React Native",
          image: "assets/img/native.png",
        },
        {
          name: "JavaScript",
          image: "assets/img/js.svg",
        },
        {
          name: "TailwindCSS",
          image: "assets/img/tailwindcss.svg",
        },
      ]
    },
    {
      name: "BigOAnalyzer",
      description: "A modern Chrome extension that analyzes the time and space complexity of your code directly on LeetCode.",
      image: "assets/img/bigO.png",
      github: "https://github.com/abhinavtiwari77/BigOAnalyzer",
      view: "",
      status: false,
      date: "August - 2024",
      demo: true,
      tech: [
        {
          name: "Javascript",
          image: "assets/img/js.svg",
        },
        {
          name: "HTML",
          image: "assets/img/html5.svg",
        },
        {
          name: "CSS",
          image: "assets/img/css3.svg",
        },
      ]
    },
    {
      name: "Travel Budget Calculator",
      description: "An AI-powered web application for planning and managing travel budgets, built with Flask (Python) backend and a modern responsive frontend.",
      image: "assets/img/web1.png",
      github:"https://github.com/abhinavtiwari77/TravelBudgetCalculator",
      view: false,
      status: false,
      date: "March - 2024",
      demo: false,
      tech: [
        {
          name: "Python",
          image: "assets/img/python.png",
        },
        {
          name: "HTML",
          image: "assets/img/html5.svg",
        },
        {
          name: "CSS",
          image: "assets/img/css3.svg",
        },
        {
          name: "JavaScript",
          image: "assets/img/js.svg",
        },
      ]
    },
    {
      name: "ThreadSim",
      description: "It is an interactive educational tool designed to visualize and demonstrate three fundamental threading models used in operating systems: Many-to-One (M:1) One-to-Many (1:N) Many-to-Many (M:N)",
      image: "assets/img/multimodel.png",
      github:"https://github.com/abhinavtiwari77/TravelBudgetCalculator",
      view: "https://multithreadmodel.netlify.app/",
      status: false,
      date: "March - 2024",
      demo: false,
      tech: [
        {
          name: "HTML",
          image: "assets/img/html5.svg",
        },
        {
          name: "CSS",
          image: "assets/img/css3.svg",
        },
        {
          name: "JavaScript",
          image: "assets/img/js.svg",
        },
      ]
    },
  ]
}

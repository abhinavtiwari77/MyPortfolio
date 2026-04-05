import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-tools',
  standalone: true,
  imports: [],
  templateUrl: './tech-tools.component.html',
  styleUrl: './tech-tools.component.css'
})
export class TechToolsComponent {

  tools: string = `I work with a range of modern tools and technologies 
                  in my day-to-day development, choosing the right ones to build reliable,
                 efficient, and maintainable solutions.`
  items: Array<any> = [
    {
      name: "MongoDB",
      description: 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it ideal for modern applications.',
      link: 'https://www.mongodb.com/',
      image: 'assets/img/mongodb.svg'
    },
    {
      name: "Express.js",
      description: 'Express.js is a minimal and flexible Node.js web application framework for building APIs and web applications.',
      link: 'https://expressjs.com/',
      image: 'assets/img/express.png'
    },
    {
      name: "React",
      description: 'React is a popular JavaScript library for building user interfaces, particularly single-page applications with reusable components.',
      link: 'https://react.dev/',
      image: 'assets/img/reactjs.svg'
    },
    {
      name: "Node.js",
      description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 engine, enabling server-side JavaScript for building scalable network applications.',
      link: 'https://nodejs.org/',
      image: 'assets/img/nodejs.svg'
    },
    {
      name: "Next.js",
      description: 'Next.js is a React framework for building fast, scalable web applications with server-side rendering and static site generation.',
      link: 'https://nextjs.org/',
      image: 'assets/img/nextjs2.svg'
    },
    {
      name: "C++",
      description: 'C++ is a powerful general-purpose programming language used for system software, game development, and high-performance applications.',
      link: 'https://isocpp.org/',
      image: 'assets/img/cpp.png'
    },
    {
      name: "Python",
      description: 'Python is a high-level, interpreted programming language known for its simplicity and versatility in web development, data science, and automation.',
      link: 'https://www.python.org/',
      image: 'assets/img/python.png'
    },
    {
      name: "PHP",
      description: 'PHP is a popular general-purpose scripting language that is especially suited for web development.',
      link: 'https://www.php.net/',
      image: 'assets/img/php.svg'
    },
    {
      name: "JavaScript",
      description: 'JavaScript is a programming language that enables you to create dynamically updating content, control multimedia, and much more.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      image: 'assets/img/js.svg'
    },
    {
      name: "TypeScript",
      description: 'TypeScript is a superset of JavaScript that compiles to plain JavaScript and provides static types.',
      link: 'https://www.typescriptlang.org/',
      image: 'assets/img/typescript.svg'
    },
    {
      name: "Tailwind CSS",
      description: 'Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML.',
      link: 'https://tailwindcss.com/',
      image: 'assets/img/tailwindcss.svg'
    },
    {
      name: "HTML5",
      description: 'HTML5 is the latest version of HyperText Markup Language, the standard for creating web pages and applications.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      image: 'assets/img/html5.svg'
    },
    {
      name: "CSS3",
      description: 'CSS3 is the latest standard for Cascading Style Sheets, adding new features and improvements over previous versions.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      image: 'assets/img/css3.svg'
    },
    {
      name: "Vite",
      description: 'Vite is a modern build tool that provides a fast development environment and optimized builds.',
      link: 'https://vitejs.dev/',
      image: 'assets/img/vitejs.svg'
    },
    {
      name: "MySQL",
      description: 'MySQL is an open-source relational database management system based on SQL (Structured Query Language).',
      link: 'https://www.mysql.com/',
      image: 'assets/img/mysql.svg'
    },
    {
      name: "GitHub",
      description: 'GitHub is a platform for version control and collaboration, allowing multiple people to work on projects simultaneously.',
      link: 'https://github.com/',
      image: 'assets/img/github.svg'
    },
    {
      name: "Firebase",
      description: 'Firebase is a platform by Google for building mobile and web applications, offering services like authentication, databases, and hosting.',
      link: 'https://firebase.google.com/',
      image: 'assets/img/firebase.webp'
    },
    {
      name: "Figma",
      description: 'Figma is a powerful, collaborative design tool for teams. Explore ideas and gather feedback, build realistic prototypes.',
      link: 'https://www.figma.com',
      image: 'assets/img/figma.svg'
    },
    {
      name: "Postman",
      description: 'Postman is a powerful tool for API development, testing, and monitoring, used by developers to streamline their workflow.',
      link: 'https://www.postman.com/',
      image: 'assets/img/postman.svg'
    },
    {
      name: "ApiDog",
      description: 'ApiDog offers tools and services for testing and monitoring APIs to ensure their functionality and performance.',
      link: 'https://apidog.com/',
      image: 'assets/img/apidog-icon.svg'
    },
    {
      name: "AWS",
      description: 'Amazon Web Services (AWS) offers a comprehensive suite of cloud services for computing, storage, and networking.',
      link: 'https://aws.amazon.com/',
      image: 'assets/img/aws.svg'
    },
    {
      name: "Linux",
      description: 'Linux is a free and open-source operating system kernel used in many distributions for servers, desktops, and embedded systems.',
      link: 'https://ubuntu.com/',
      image: 'assets/img/linux.svg'
    },
    {
      name: "Ubuntu",
      description: 'Ubuntu is a popular free and open-source Linux-based operating system, is used for a wide range of purposes, including powering desktops, servers, cloud platforms.',
      link: 'https://www.kernel.org/',
      image: 'assets/img/ubuntu.svg'
    },
    {
      name: "Visual Studio Code",
      description: 'Visual Studio Code is a source-code editor developed by Microsoft with support for debugging, syntax highlighting, and version control.',
      link: 'https://code.visualstudio.com/',
      image: 'assets/img/vscode.svg'
    },
    {
      name: "ChatGPT",
      description: 'ChatGPT is an AI chatbot developed by OpenAI, is used for content writing, and assisting with coding, all through natural language processing.',
      link: 'https://chatgpt.com/',
      image: 'assets/img/openai.svg'
    },
    {
      name: "Vercel",
      description: 'Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web',
      link: 'https://vercel.com',
      image: 'assets/img/vercel-icon-dark.svg'
    },
    {
      name: "TypeScript",
      description: 'TypeScript is a superset of JavaScript that compiles to plain JavaScript and provides static types.',
      link: 'https://www.typescriptlang.org/',
      image: 'assets/img/typescript.svg'
    },
    {
      name: "API-Ninjas",
      description: 'API Ninjas is a data company that enables you to build real applications using real data. API Ninjas maintains 78 APIs',
      link: 'https://api-ninjas.com/',
      image: 'assets/img/ninja.png'
    },
    {
      name: "Git",
      description: 'Git is a distributed version control system for tracking changes in source code during software development.',
      link: 'https://git-scm.com/',
      image: 'assets/img/github.svg'
    },
    {
      name: "Contentful",
      description: 'Contentful is a cloud-based content management system (CMS) that allows users to create, store, and manage content for websites, mobile apps, and other platforms. ',
      link: 'https://www.contentful.com/',
      image: 'assets/img/contentful.png'
    },
    {
      name: "Daily.Dev",
      description: 'Daily.dev is a professional network for developers, designed to help them improve their skills, collaborate with like-minded individuals, and grow within the developer community. ',
      link: 'https://daily.dev',
      image: 'assets/img/dailydev.svg'
    },
    {
      name: "Microsoft Loop",
      description: 'Loop is a note-taking platform that helps users organize, collaborate, and manage their notes efficiently.',
      link: 'https://loop.cloud.microsoft/learn',
      image: 'assets/img/loop.svg'
    },
    {
      name: "Affine",
      description: 'AFFiNE is an open-source, all-in-one workspace that combines the features of note-taking, project management, and collaboration tools like Notion',
      link: 'https://affine.pro',
      image: 'assets/img/affine.svg'
    },
    {
      name: "Docker",
      description: 'Docker is a software platform that facilitates building, testing, and deploying applications efficiently by packaging them into standardized units called containers.',
      link: 'https://www.docker.com',
      image: 'assets/img/docker.svg'
    },

  ];
}

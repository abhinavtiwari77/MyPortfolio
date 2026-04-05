import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { WorkInfoComponent } from '../work-info/work-info.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private dialog: MatDialog) {}

  openPopup(company: any): void {
    const dialogWidth = window.innerWidth > 768 ? '800px' : '90%';

    this.dialog.open(WorkInfoComponent, {
      width: '80%',
      maxWidth: '1200px',
      data: company,
    });
  }

  // Array of data
  aboutme: string = `I’m a software developer with hands-on experience in modern web development,
                     focused on building reliable systems and meaningful solutions. I aim to contribute 
                     to organizational growth through problem-solving, clean design, and ownership. I enjoy 
                     building from scratch, understanding systems deeply, and taking on complex challenges.`;

  work: Array<any> = [
    {
      id: 1,
      company: 'Hacktoberfest 2025',
      position: 'Open-Source Contributor',
      time_period: 'October 2025',
      place: 'Global Virtual Event',
      overview:
        'Hacktoberfest is a month-long celebration of open-source software run by DigitalOcean, encouraging developers worldwide to contribute to open-source projects and collaborate with the global developer community.',
      my_role:
        'Contributed 5+ accepted pull requests across diverse open-source repositories, focusing on improving code maintainability, enhancing authentication workflows, and optimizing UI performance. Collaborated with global developers using Git, GitHub, and CI/CD tools to ensure production-ready code quality.',
      impact:
        'Enhanced project scalability by 20%+ through strategic code improvements and refactoring. Gained valuable experience in collaborative development, version control best practices, and working with distributed teams. Successfully merged contributions improved user experience and system reliability across multiple projects.',
      projects: [
        {
          name: 'Hacktoberfest 2025',
          link: '#',
          image: 'assets/img/HactoberFest.png',
          gallery: [
            { image: 'assets/img/HactoberFest.png', name: 'Hacktoberfest Badge' },
          ],
        },
      ],
      tech: [
        {
          name: 'GitHub',
          link: 'https://github.com/',
          image: 'assets/img/github.svg',
        },
        {
          name: 'JavaScript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/js.svg',
        },
        {
          name: 'TypeScript',
          link: 'https://www.typescriptlang.org/',
          image: 'assets/img/typescript.svg',
        },
        {
          name: 'React',
          link: 'https://react.dev/',
          image: 'assets/img/reactjs.svg',
        },
        {
          name: 'Node.js',
          link: 'https://nodejs.org/',
          image: 'assets/img/nodejs.svg',
        },
        {
          name: 'Python',
          link: 'https://www.python.org/',
          image: 'assets/img/python.png',
        },
        {
          name: 'HTML5',
          link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          image: 'assets/img/html5.svg',
        },
        {
          name: 'CSS3',
          link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          image: 'assets/img/css3.svg',
        },
      ],
    },
    {
      id: 2,
      company: 'HackVerse 2025',
      position: 'University Hackathon - 3rd Place',
      time_period: 'February 2025',
      place: 'University Campus',
      overview:
        'HackVerse is a premier university-level hackathon bringing together innovative minds to build cutting-edge solutions. Ranked 3rd among 100+ participants in a highly competitive environment.',
      my_role: `Led the development of Spyder, an AI-powered Security Suite - a comprehensive real-time content moderation and threat detection platform. Built a CNN-based NSFW classifier achieving 92% accuracy for intelligent content filtering. Integrated VirusTotal API for advanced malware detection and threat analysis. The platform achieved an overall 85% accuracy in detecting and mitigating security threats in real-time.`,
      impact:
        'This achievement demonstrated my ability to rapidly prototype and deploy AI-driven solutions under tight deadlines. Gained hands-on experience with machine learning model development, API integrations, and building scalable security systems. The project showcased strong problem-solving skills, technical innovation, and the ability to work effectively in high-pressure team environments.',
      projects: [
        {
          name: 'Spyder - AI Security Suite',
          link: '#',
          image: 'assets/img/spyder.png',
          gallery: [
            { image: 'assets/img/spyder.png', name: 'Spyder Dashboard' },
          ],
        },
      ],
      tech: [
        {
          name: 'Python',
          link: 'https://www.python.org/',
          image: 'assets/img/python.png',
        },
        {
          name: 'React',
          link: 'https://react.dev/',
          image: 'assets/img/reactjs.svg',
        },
        {
          name: 'Node.js',
          link: 'https://nodejs.org/',
          image: 'assets/img/nodejs.svg',
        },
        {
          name: 'MongoDB',
          link: 'https://www.mongodb.com/',
          image: 'assets/img/mongodb.png',
        },
        {
          name: 'JavaScript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
          image: 'assets/img/js.svg',
        },
        {
          name: 'TypeScript',
          link: 'https://www.typescriptlang.org/',
          image: 'assets/img/typescript.svg',
        },
        {
          name: 'GitHub',
          link: 'https://github.com/',
          image: 'assets/img/github.svg',
        },
        {
          name: 'Postman',
          link: 'https://www.postman.com/',
          image: 'assets/img/postman.svg',
        },
      ],
    },
    {
      id: 3,
      company: 'Unstop Campus Ambassador',
      position: 'Campus Ambassador',
      time_period: '2025 — 2026',
      place: 'University Campus',
      overview:
        'Representing Unstop on campus, promoting programs, competitions, and opportunities while building an active student community.',
      my_role:
        'Led outreach and awareness initiatives, organized peer engagement activities, and supported student participation in Unstop events.',
      impact:
        'Improved campus awareness for Unstop opportunities and helped students participate in skill-building contests and programs.',
      projects: [
        {
          name: 'Unstop Campus Ambassador',
          link: '#',
          image: 'assets/img/camp.png',
          gallery: [
            { image: 'assets/img/camp.png', name: 'Unstop Campus Ambassador' },
          ],
        },
      ],
      tech: [],
    },
  ];

  education: Array<any> = [
    {
      studied_at: 'Lovely Professional University',
      qualified: 'Bachelor of Technology (Computer Science)',
      time_period: '2023 - Present',
      place: 'Punjab',
    },
    {
      studied_at: 'KP children\'s Academy',
      qualified: 'Plus Two Computer Science',
      time_period: '2022 — 2023',
      place: 'Bewar Uttar Pradesh',
    },
    {
      studied_at: 'KP children\'s Academy',
      qualified: 'SSLC',
      time_period: '2020 — 2021',
      place: 'Bewar Uttar Pradesh',
    },
  ];
}

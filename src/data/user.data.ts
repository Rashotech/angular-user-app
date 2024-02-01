import { ISpecialization, IMember } from './user.interface';
import {
  faGear,
  faScrewdriverWrench,
  faCodeCompare,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

export const SPECIALIZATIONS: ISpecialization[] = [
  {
    icon: faGear,
    title: 'Project management',
    description:
      'Efficient coordination and timely deliveries are our priorities, ensuring successful project outcomes.',
  },
  {
    icon: faCodeCompare,
    title: 'Coding Expertise',
    description:
      'Mastery in various programming languages and frameworks, bringing innovation and precision to your software projects.',
  },
  {
    icon: faCode,
    title: 'Agile Software Development',
    description:
      'Adopting Agile methodologies for rapid, collaborative, and successful software development projects.',
  },
  {
    icon: faScrewdriverWrench,
    title: 'Cross Platform',
    description:
      'Navigating operating systems seamlessly for software compatibility and optimal performance.',
  },
];

export const TEAMMEMBERS: IMember[] = [
  {
    name: 'Habeeb Suleiman',
    title: 'SOFTWARE ENGINEER',
    summary:
      'A software engineer with practical experience creating scalable, readily available single-page apps (SPAs).',
    linkedIn: 'https://www.linkedin.com/in/habeeb-suleiman-9b2b461b9/',
    github: 'https://github.com/Habeebopeyemi',
    picture: '../../assets/habeeb.png',
  },
  {
    name: 'Ojo Funmilayo',
    title: 'SOFTWARE ENGINEER',
    summary:
      'software Sngineer with foundational knowledge in JavaScript, including proficiency in the React framework',
    linkedIn: 'https://www/linkedin.com/in/funmilayo-ojo-a4174910a',
    github: 'https://github.com/Funmicharis',
    picture: 'assets/funmi.jpeg',
  },
  {
    name: 'Rasheed Ayoade',
    title: 'SOFTWARE ENGINEER',
    summary:
      'A proficient fullstack developer, with experience building optimized web and mobile applications',
    linkedIn: 'https://www.linkedin.com/in/ayoadera',
    github: 'https://github.com/Rashotech',
    picture: '../assets/rasheed.jpg',
  },
  {
    name: 'Aluko Folarin',
    title: 'SOFTWARE ENGINEER',
    summary:
      'Results-driven and highly organized web developer with expertise in JavaScript, and React frameworks.',
    linkedIn: 'https://www.linkedin.com/in/alukofolarin',
    github: 'https://github.com/ProminenceFM',
    picture: '../assets/fola.jpg',
  },
  {
    name: 'Babatunde Omotayo',
    title: 'SOFTWARE ENGINEER',
    summary:
      'A Data Systems and Backend enthusiast, with keen interest in Java, spring boot and other OOP languages ',
    linkedIn: 'https://www.linkedin.com/in/babatundeomotayo',
    github: 'https://github.com/printf-bomotayo',
    picture: '../assets/tunde.jpg',
  },
  {
    name: 'Ile Samuel',
    title: 'SOFTWARE ENGINEER',
    summary:
      'A software engineer with practical experience creating scalable, readily available single-page apps (SPAs).',
    linkedIn: 'www.linkedin.com/in/samuel-ile-6552b6a5/',
    github: ' https://github.com/Samswagz',
    picture: '../assets/samuel.jpeg',
  },
];

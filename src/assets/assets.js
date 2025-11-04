import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.png';
import project1 from '../assets/project1.PNG';
import project2 from '../assets/project2.PNG';
import project3 from '../assets/project3.PNG';
import project4 from '../assets/project4.PNG';

export const assets = {
    profileImg,
}
  

export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building modern, responsive user interfaces with React and NextJS',
    tags: ['ReactJS', 'NextJS', 'Tailwind CSS', 'HTML/CSS']
  },
  {
    title: 'Backend & Ai Integration',
    icon: FaServer,
    description: 'Creating smart applications with Python and AI technologies',
    tags: ['Node.js', 'Python', 'OpenAi SDK', 'Typescript']
  },
  {
    title: 'Tools & Version Control',
    icon: FaTools,
    description: 'Using Git and modern tools for efficient development.',
    tags: ['Git & GitHub', 'VS Code', 'Responsive Design']
  }
];



export const projects = [
  {
    title: "Personal Library Manager",
    description:"An efficient book inventory manager featuring complete CRUD functionality in a sleek interface.",
    image: project4,
    tech: ["Python", "Chainlit"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "https://library-manager-twobgesaw6nkcfpud5kn4d.streamlit.app/",
    code: "#",
  },
  {
    title: "Unit Converter App",
    description: "Versatile conversion tool handling multiple measurement categories with instant calculations and intuitive user interface.",
    image: project2,
    tech: ["Python", "Streamlit"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://unit-converter-ddfobnqj2rxbgnk8vzeuu7.streamlit.app/",
    code: "#",
  },
  {
    title: "Password Strength Meter",
    description: "Security-focused tool that analyzes password strength in real-time and provides security recommendations.",
    image: project3,
    tech: ["Python", "Streamlit", "Regex"],
    icons: [FaReact, FaDatabase],
    demo: "https://password-strength-meter-by-usman-imran.streamlit.app/",
    code: "#",
  },
  {
    title: "Crypto Agent",
    description:"AI-powered cryptocurrency tracker providing real-time market data and portfolio analytics with intelligent insights.",
    image: project1,
    tech: ["OpenAI SDK", "Python", "Chainlit"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];

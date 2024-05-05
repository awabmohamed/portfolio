/* eslint-disable no-sparse-arrays */
import {
  backend,
  backendDev,
  creator,
  css,
  dynamic,
  frontend,
  git,
  html,
  intuitive,
  javascript,
  mobile,
  mongodb,
  nodejs,
  notescape,
  reactjs,
  responsive,
  tailwind,
  threejs,
  todolist,
  web,
} from "../assets";

export const navLinks = [
  {
    id: "#about",
    title: "About",
  },
  {
    id: "#work",
    title: "Work",
  },
  {
    id: "#contact",
    title: "Contact",
  },
  {
    id: null,
    title: "Download CV",
    isCv: true,
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Curator",
    icon: mobile,
  },
  {
    title: "Open Source Contributer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "LOGISTICS COORDINATOR",
    company_name: "Syndicate logistics llc",
    icon: frontend,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Utilized computer systems to track shipments from origin to destination and generate reports accordingly.",
      "Organized daily deliveries and pick-ups according to geographic area and delivery employee availability.",
      "Prioritized tasks and managed deadlines under strict time constraints.",
      "Resolved issues during shipping, communicating delays to relevant individuals.",
    ],
  },
  {
    title: "DEVELOPMENT INTERN",
    company_name: "Infor",
    icon: backendDev,
    iconBg: "#E6DEDD",
    date: "May 2023 - July 2023",
    points: [
      "Troubleshot technical issues with hardware and software applications within the organization.",
      "Engaged in structured learning activities to grasp the fundamentals of the Mongoose development environment.",
      "Assisted in enhancement design and implementation efforts under the guidance of experienced developers.",
      "Contributed to bug report diagnosis and resolution by actively participating in debugging sessions.",
      "Learned from and contributed to the development team's workflow and processes.",
      "Assisted in testing and quality assurance activities to ensure software reliability and performance.",
    ],
  },
  {
    title: "JR REACT JS DEVELOPER",
    company_name: "Exaways Corporation",
    icon: backendDev,
    iconBg: "#E6DEDD",
    date: "January 2021 - July 2021",
    points: [
      "Developed complex web applications using HTML, CSS, JavaScript, and JQuery technologies.",
      "Collaborated effectively with cross-functional teams to ensure timely delivery of projects.",
      "Troubleshot and debugged various issues with existing software systems.",
      "Utilized React JS, Tailwind CSS, TypeScript, and related technologies to build responsive and interactive user interfaces.",
    ],
  },
];

const testimonials = [
  {
    title: "Responsive",
    testimonial:
      "I specialize in creating responsive websites using Bootstrap, media queries, Tailwind, and other cutting-edge technologies. With a focus on user-centric design, I ensure a seamless experience across diverse devices.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: responsive,
  },
  {
    title: "Dynamic",
    testimonial:
      " I excel at crafting dynamic websites using JavaScript, Node.js, and other backend technologies. With a focus on seamless user experiences and real-time functionalities, I bring a dynamic edge to web development.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: dynamic,
  },
  {
    title: "Intuitive",
    testimonial:
      "I have a strong preference for easy to use designs that prioritize user experience,I ensure that every design is user-friendly and seamlessly guides users through an engaging and intuitive journey.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: intuitive,
  },
];

const projects = [
  {
    name: "To Do List",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus odio sequi magni libero modi dolorum reiciendis quas obcaecati sint sunt, dolor error non voluptatibus dolorem. Molestiae quam dolorem explicabo atque!",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/",
    website_link: "https://example.com/",
  },
  {
    name: "NoteScape",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus odio sequi magni libero modi dolorum reiciendis quas obcaecati sint sunt, dolor error non voluptatibus dolorem. Molestiae quam dolorem explicabo atque!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "icp",
        color: "pink-text-gradient",
      },
    ],
    image: notescape,
    source_code_link: "https://github.com/",
    website_link: "https://example.com/",
  },
  {
    name: "To Do List",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus odio sequi magni libero modi dolorum reiciendis quas obcaecati sint sunt, dolor error non voluptatibus dolorem. Molestiae quam dolorem explicabo atque!",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/",
    website_link: "https://example.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };

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
  reactjs,
  responsive,
  tailwind,
  threejs,
  web,
  EAS,
  ET,
  FilmAppImg,
  FP,
  MPG,
  PSC,
  REA,
  RPS,
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
    name: "Film App",
    description:
      "Explore the world of cinema effortlessly with this innovative web app! Simply search for any movie on the search bar and it will be displayed. Whether you're a film buff or just looking for your next movie night pick, This platform has you covered, delivering seamless access to endless entertainment",
    tags: [
      {
        name: "reactJs",
        color: "red-text-gradient",
      },
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "nodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: FilmAppImg,
    source_code_link: "https://github.com/awabmohamed/FilmApp",
    website_link: "https://awabmohamed.github.io/FilmApp/",
  },
  {
    name: "Rock, Paper, Scissors",
    description:
      "captivating web app that brings the classic game of Rock, Paper, Scissors to life in a digital arena! Engage in timeless battles of strategy with the computer to test your luck. With sleek design and intuitive controls, this platform offers seamless gameplay for players of all ages.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: RPS,
    source_code_link: "https://github.com/awabmohamed/rock-paper-scissors",
    website_link: "https://awabmohamed.github.io/rock-paper-scissors/",
  },
  {
    name: "Password Strength Checker",
    description:
      "Ensure the security of your digital world with our cutting-edge password strength checker web app! With intuitive interface and robust algorithms, it analyzes passwords instantly, providing comprehensive feedback on strength and vulnerability. Safeguard your accounts with confidence, knowing your passwords meet the highest standards of security.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: PSC,
    source_code_link: "https://github.com/awabmohamed/PasswordStrengthChecker",
    website_link: "https://awabmohamed.github.io/PasswordStrengthChecker/",
  },
  {
    name: "Fifteen Puzzle",
    description:
      "Experience the classic challenge of the fifteen puzzle like never before with our captivating web app! Seamlessly slide tiles to solve the puzzle and reveal the hidden image or sequence. Whether you're a seasoned puzzler or a newcomer to the game, this intuitive interface and adjustable difficulty levels offer endless hours of brain-teasing entertainment.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: FP,
    source_code_link: "https://github.com/awabmohamed/Fifteen-Puzzle",
    website_link: "https://awabmohamed.github.io/Fifteen-Puzzle/",
  },
  {
    name: "Match The Picture Game",
    description:
      "Test your observation and memory skills as you race against the clock to pair identical images from a grid of shuffled cards. With multiple difficulty levels, this addictive game promises endless fun for players of all ages.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: MPG,
    source_code_link: "https://github.com/awabmohamed/PictureGame",
    website_link: "https://awabmohamed.github.io/PictureGame/",
  },
  {
    name: "Etch-a-Sketch",
    description:
      "Unleash your creativity with this digital interpretation of the beloved Etch-a-Sketch toy! Navigate the virtual knobs to draw intricate designs or simple doodles with ease.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: EAS,
    source_code_link: "https://github.com/awabmohamed/etch-a-sketch",
    website_link: "https://awabmohamed.github.io/etch-a-sketch/",
  },
  {
    name: "Events and Tickets Inc",
    description:
      "one-stop destination for discovering and securing tickets to the hottest events in town! From concerts and sporting events to theater performances and festivals, browse a diverse range of experiences and easily purchase tickets with just a few clicks.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
      {
        name: "sqlite",
        color: "yellow-text-gradient",
      },
    ],
    image: ET,
    source_code_link: "https://github.com/CSC-4350-SP2024/Team5",
    website_link: "https://github.com/CSC-4350-SP2024/Team5",
  },
  {
    name: "Real Estate App",
    description:
      "Welcome to Big4-Estate, where property buyers and sellers unite on a single, user-friendly platform! Seamlessly connect with your ideal property match, whether you're in search of a dream home or looking to sell your current property. With intuitive features and comprehensive listings, Big4-Estate streamlines the real estate process, making finding or selling property easier and more efficient than ever before.",
    tags: [
      {
        name: "html",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "purple-text-gradient",
      },
    ],
    image: REA,
    source_code_link: "https://github.com/mkunjo/realEstate",
    website_link: "https://github.com/mkunjo/realEstate",
  },
];

export { experiences, projects, services, technologies, testimonials };

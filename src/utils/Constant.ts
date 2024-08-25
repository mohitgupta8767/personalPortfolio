//import start
import { AiOutlineGithub } from "react-icons/ai";
import { BsFiletypeCss, BsFiletypeScss } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
//import end

//prof detail start
export const PROFILE_DETAIL: any = {
  FullName: "Mohit Kumar Gupta",
  Name: "Mohit Gupta",
  Role: "Senior Software Developer",
  MobileNo: "+919334946981",
  MobileNoForView: "+91 93349 46981",
  Email1: "mohitgupta8767@gmail.com",
  AllEmail: "mohitgupta8767@gmail.com; mohitgupta3010@gmail.com",
  LinkedIn: "https://www.linkedin.com/in/mohit-kumar-gupta-176249a6",
  WhatsAppNo: "919334946981",
  Experience: "5+ years",
  ResumeLink:
    "https://drive.google.com/file/d/1FKHZNfrnfhmqnwkq56h6WhliDHCiftbz/view?usp=drive_link",
  ShortBio:
    "Experienced frontend developer proficient in HTML, CSS, SCSS and JavaScript, with expertise in React and Next. Dedicated to crafting intuitive user interfaces, optimizing performance, and embracing modern web technologies. Passionate about  impactful digital experiences. Let's collaborate on creating exceptional web applications.",
  UpdatedAt: "Aug-2024",
  Skills: [
    {
      name: "React JS",
      experience: "5+ Years",
      icon: FaReact,
      icnColor: "#50BBD7",
    },
    {
      name: "Redux",
      experience: "3+ Years",
      icon: SiRedux,
      icnColor: "#7248B6",
    },
    {
      name: "Typescript",
      experience: "3+ Years",
      icon: SiTypescript,
      icnColor: "#1573C0",
    },
    {
      name: "Javascript",
      experience: "5+ Years",
      icon: SiJavascript,
      icnColor: "#EFD81D",
    },

    {
      name: "SCSS",
      experience: "1.2+ Years",
      icon: BsFiletypeScss,
      icnColor: "#C86394",
    },
    {
      name: "CSS",
      experience: "3+ Years",
      icon: BsFiletypeCss,
      icnColor: "#2649E4",
    },
    {
      name: "Next JS",
      experience: "1.5+ Years",
      icon: TbBrandNextjs,
      icnColor: "#04417B",
    },
    {
      name: "Github",
      experience: "3+ Years",
      icon: AiOutlineGithub,
      icnColor: "#ff5a1e",
    },
  ],
  Projects: [
    {
      id: 1,
      name: "ENSAFENxt",
      desc: `Lead the frontend development efforts for the ENSAFENxt project, ensuring high-quality code and optimal performance.
Increasing performance and reducing operation costs, we migrated from ASP.NET to ReactJS in the frontend and used Express in the backend.
Developed and deployed a software update, resulting in a 30% reduction in system errors and improving application performance by 25%.
Develop and maintain server-side logic using NodeJs.
Implemented RESTful APIs to handle various HTTP request.
Implemented secure authentication and authorisation mechanism using JWT and OAuth.
Collaborate with cross-functional teams to translate product requirements into technical specifications.
Write clean, efficient, and maintainable code using industry best practices.
Conduct code reviews and provide constructive feedback to junior developers to ensure code quality and consistency.`,
    },
    {
      id: 2,
      name: "Command Center (Motovolt)",
      desc: `Build Management console for Motovolt, where different parameters of the vehicles are captured and developed using the ReactJs library.
Leveraged Redux-Saga to handle complex asynchronous operations, manage side effects, and enhance real-time updates, contributing to scalable and maintainable application architectures.
Developed highly scalable React component for handling the entire B2B portal and creating complex user interface for the admin section.
High performant real-time tracking on web using Google Maps.
Managed and deployed applications using AWS Elastic Beanstalk, implemented storage solutions with AWS S3 Bucket, developed and deployed apps with AWS Amplify, and optimized serverless functions using AWS Lambda.`,
    },
    {
      id: 3,
      name: `Well intervention Scada`,
      desc: `Learning and adapting to various technologies concerning full stack development which includes tools and technologies such as JavaScript.
Core member of the development team.
Integrated Software design build for analyzing the behaviour of tools and providing charts.
Exploring use-cases pertaining to the technologies coming up already in the market.
Assisting the completion team by providing them different logs for production operations.`,
    },
  ],
};
//prof detail end

//theme start
export const THEME_COLOR: {
  common: { [key: string]: string };
  light: { [key: string]: string };
  dark: { [key: string]: string };
} = {
  common: {
    "theme-color": "#ff5a1e",
    "content-font-size": "16px",
    "header-height": "5rem",
  },
  light: {
    "dark-color": "#322f30",
    "light-color": "#f4ecde",
    "control-light-border-color": "rgba(0, 0, 0, 0.23)",
    bg1: "#f4ecde", // light-color
    bg2: "white",
    bg3: "#322f30", //dark-color
    bg4: "#f4ecde", // light-color
  },
  dark: {
    "dark-color": "white",
    "light-color": "white",
    "control-light-border-color": "rgba(255, 255, 255, 0.23)",
    bg1: "#050201",
    bg2: "#151514",
    bg3: "#050201", //bg1
    bg4: "#151514", // bg2
  },
};
//theme end

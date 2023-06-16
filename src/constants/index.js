


import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  skill,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    
    
    id: "about",
    title: "About",
   
  },
  {
    id: "work",
    title: "Work",
    
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: mobile,
  },
  {
    title: "Graphic Designer ",
    icon: backend,
  }
];

const technologies = [
];

const experiences = [
  {
    title: "EDUCATION",
    company_name: "ADEN University",
    icon: starbucks,
    iconBg: "#383E56",
    date: " Nov 2015 -  Nov 2020",
    points: [
      "I earned a Bachelor degree in electronic and communication engineering, equipping me with a strong foundation in technical principles and problem-solving techniques. My educational background has provided me with the knowledge and skills necessary to tackle complex challenges."
    ],
  },
 
  {
    title: "Field Experience",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "Logistic Assistant : Worked as a logistic assistant, handling various tasks related to logistics operations, including inventory management, supply chain coordination, and order processing.      ",
      "Data Management: Demonstrated proficiency in data management, ensuring accuracy, organization, and security of data. Implemented efficient data entry processes and maintained data integrity.      ",
      "Data Entry: Expertise in data entry, efficiently inputting and verifying large volumes of data while maintaining high levels of accuracy and attention to detail."
    ],
  },
  {
    title: "Online EXPERIENCE",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Frontend Development: Completed Re:coded BootCamp, gaining expertise in HTML, CSS, JavaScript, CSS frameworks, React, and other libraries. Contributed to user-friendly websites and web applications.",
      "Data Analysis: Completed Google Data Analytics program, excelling in R and Tableau. Skilled in data manipulation, analysis, and visualization.",
      "Graphics Design: Proficient in Adobe Photoshop, Illustrator, and After Effects. Created captivating graphics and motion graphics for a non-profit organization, making a positive impact."
    ],
  },

  {
    title: "Personal Skills ",
    icon: skill,
    iconBg: "#E6DEDD",
    points: [
      "Strong communication skills",
      "Attention to detail and accuracy",
      "Adaptability to learn new technologies",
      "Problem-solving and analytical abilities",
      "Effective debugging and issue resolution"],
  },

  {
    title: "Technical Skills",
    icon: meta,
    iconBg: "#E6DEDD",

    points: [
      "Responsive web design",
      "Database management (e.g., SQL)",
      "Frontend frameworks (e.g., React)",
      "Proficient in HTML, CSS, JavaScript",
      "Version control systems (e.g., Git)",
      "Data analysis tools (e.g., R, Tableau)",
      "Microsoft Office Suite (Word, Excel, PowerPoint)",
      "CSS frameworks (e.g., Bootstrap, Material UI, Tailwind)",
      "Adobe Creative Suite (Photoshop, Illustrator, After Effects)",],
  },



];

const testimonials = [
  
 
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

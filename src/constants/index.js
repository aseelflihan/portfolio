


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
  p,
  r,
  ecommerce,
  threejs,
  logo2,
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
      "MS Office Suite",
      "Adobe Creative Suite",
      "Responsive Web Design",
      "Version Control (Git)",
      "Database Management (SQL)",
      "Frontend Frameworks (React)",
      "Data Analysis (R, Python ,PowerBI Tableau)",
      "Web Tech Proficiency (HTML, CSS, JavaScript)",
      "CSS Frameworks (Bootstrap, Material UI, Tailwind)",],
  },



];

const testimonials = [
  
 
];

const projects = [
  {
    name: "Tabadul (Let's Share)",
    description:
      " is a socially-conscious platform that enables the exchange of unused items to those in need. Our site encourages waste reduction and community support by allowing users to list items they're ready to part with and enabling those in financial need to acquire them for free. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "nextjs",
        color: "teal-text-gradient",
      },

      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "emotion Css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/202212-GIZ-YE-FEW/Tabadul",
  },
  {
    name: "Movflix ",
    description:
      "Movflix is site for sharing and discovering movies. Simple and user-friendly, it lets you browse films by categories, learn about their details from author pages, and see user ratings. Whether you're into drama, comedy, action or romance, Movflix brings all movie lovers together in one interactive space. ",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "API",
        color: "teal-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/202212-GIZ-YE-FEW/movie-project-actioncode",
  },
  {
    name: "E-commerce store ",
    description:
      "A user-centric e-commerce website that effortlessly guides visitors through a delightful shopping journey. This visually captivating platform is thoughtfully designed to ensure optimal user satisfaction and maximize sales conversions for the store.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "green-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
        {
          name: "API",
          color: "teal-text-gradient",
        },
      ],
    image: ecommerce,
    source_code_link: "https://github.com/202212-GIZ-YE-FEW/react-ecommerce-reactrockstars",
  },

  {
    name: "Mad Libs",
    description:
      "is an interactive and kid-friendly website designed to make learning fun. It uses mad libs style storytelling to teach kids about different types of words while fueling their creativity. With a variety of story themes and a vibrant, intuitive interface, Mad libs turns language learning into an exciting adventure for children. ",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
    image: tripguide,
    source_code_link: "https://github.com/202212-GIZ-YE-FEW/mad-libs-tech-titans",
  },

  {
    name: "Uncovering the Reality of Violence Against Women and Girls",
    description:
      "Python-based project analyzes global data to shed light on violence against women. By using data analysis techniques, we transform complex data into clear visualizations, aiming to inform policy decisions and promote targeted action against such violence. ",
      tags: [
        {
          name: "python ",
          color: "blue-text-gradient",
        },
        {
          name: "Google Colab ",
          color: "green-text-gradient",
        }
      ],
    image: p,
    source_code_link: "https://github.com/aseelflihan/Violence-Against-Women-and-Girls-DA_Batch1/blob/main/Violence_Against_Women_and_Girls.ipynb",
  },
  {
    name: "Improve Marketing Strategy | Bellabeat",
    description:
      "This R-based project analyzes publicly available user data from Bellabeat, a high-tech company creating health products for women. Utilizing daily user data from 18 CSV files, we cleaned and analyzed the dataset to better understand consumer preferences and enhance Bellabeat's marketing strategy. ",
      tags: [
        {
          name: "R language  ",
          color: "blue-text-gradient",
        },
        {
          name: "jupyter notebook ",
          color: "green-text-gradient",
        }
      ],
    image: r,
    source_code_link: "https://aseelflihan.github.io/Bellabeat.html",
  },

  {
    name: "Diverse Logo Collection ",
    description:
      "This collection features a range of logos, each uniquely crafted using Adobe software, demonstrating a blend of creative styles for varied branding requirements. ",
      tags: [
        {
          name: "adobe illustrator  ",
          color: "blue-text-gradient",
        },
        {
          name: "adobe photoshop ",
          color: "green-text-gradient",
        }
      ],
    image: logo2,
    source_code_link: "https://aseelflihan.github.io/logo.html",
  }


];



export { services, technologies, experiences, testimonials, projects };

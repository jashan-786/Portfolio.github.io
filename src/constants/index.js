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
  neo,
  security,
  walmart,
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
  }
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Android Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Android Developer (Intern)",
    company_name: "Neo Financial",
    icon: neo,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - April 2023",
    points: [
      "Devised documentation for each app, detailing operation aspects, functions, capabilities and features",
      "Designed user interfaces that engaged multiple senses and produced immersive experiences.",
      "Managed aspects of Android app lifecycle from research and planning through deployment and post-launch support",
      "Consistently used Android SDK to produce highly effective and nuanced content.",
      "Created custom mobile applications using native technologies",
      "Employed JUnit framework to perform unit tests",
      "Employed third-party APIs to facilitate seamless access to external in-app cloud data",
      "Main Project was creating a Rick and Morty Application by consuming graphQL API of Rick and Morty",
      "Published it on google play store and maintained it",
      "Learned full-fledged Application Development",
    ],
  },

  {
    title: "Customer Fullfillment Associate",
    company_name: "Walmart",
    icon: walmart,
    iconBg: "#FFFFFF",
    date: "Nov 2021 - Jan 2023",
    points: [
      "Checked inventory and selected products from specific locations based upon availability.",
      "Moved boxes and organized aisles to open up floor space and enable forklift operators to move freely through warehouse",
      "Reduced fulfillment errors by using RF scanners to quickly pick items to proper bins.",
      "Prepared orders by processing requests, pulled materials from warehouse, packed boxes, and prepared shipments.",
    ],
  },
  {
    title: "Security Guard",
    company_name: "Impact Security",
    icon: security,
    iconBg: "#E6DEDD",
    date: "July 2021 - Nov 2022",
    points: [
      "Maintain the security and safety of the assigned premises.",
      "Control access to the building or facility, ensuring only authorized personnel are allowed entry.",
      "Monitor the area for any suspicious activities, theft, or security breaches.",
      "Respond to alarms, emergencies, or incidents and take appropriate action.",
      "Conduct regular patrols to ensure the premises are secure and identify potential risks."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
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

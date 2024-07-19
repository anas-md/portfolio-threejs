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
    angular,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    huntington,
    tajdid,
    hnb,
    revature,
    carrent,
    jobit,
    tripguide,
    threejs,
    php,
    java,
    next,
    python,
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
      id: "tech",
      title: "Skills",
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML",
    //   icon: html,
    // },
    // {
    //   name: "CSS",
    //   icon: css,
    // },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Next.js",
      icon: next,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Php",
      icon: php,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Git",
      icon: git,
    },
    // {
    //   name: "Docker",
    //   icon: docker,
    // },
    // {
    //   name: "Figma",
    //   icon: figma,
    // },

  ];
  
  const experiences = [
    {
      title: "Big Data Executive",
      company_name: "TAJDID Corporation",
      icon: tajdid,
      iconBg: "#FFFFFF",
      date: "May 2023 - Present",
      points: [
        "Pioneered development of a welfare application for the State of Terengganu using Laravel, Vue and MySQL.",
        "Conducted presentations and engaged with government stakeholders on big data solutions.",
        "Executed end-to-end data solutions, including scraping and creating Tableau/Power BI dashboards.",
      ],
    },
    {
      title: "Programmer Analyst 2",
      company_name: "Huntington National Bank",
      icon: huntington,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - April 2023",
      points: [
        "Headed the development of a new application feature with the launch of a new credit card product.",
        "Developed new features and maintained existing web applications pertaining to product originations.",
        "Collaborate with UX/UI designers to implement responsive and accessible website designs.",
        "Exercised Agile and Scrum practices to meet sprint deadlines and application deployment.",
      ],
    },
    {
      title: "Associate Software Engineer",
      company_name: "Revature",
      icon: revature,
      iconBg: "#E6DEDD",
      date: "April 2020 - Dec 2020",
      points: [
        "Developed and maintained a full stack application using Java Spring Boot, Oracle SQL and Angular.",
        "Involved in providing presentations and demonstrations to stakeholders on project applications.",
        "Met and interviewed with clients to discuss on application projects.",
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
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
      title: "Software Developer",
      icon: web,
    },
    {
      title: "ML Enginner",
      icon: mobile,
    },
    {
      title: "B2B Professional",
      icon: backend,
    },
    {
      title: "Cloud Practitioner",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },

    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },

    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },

  ];
  
  const experiences = [
    {
      title: "SAP Technology Consultant Professional",
      
      icon: starbucks,
      iconBg: "#383E56",
      
      points: [
      "Key consulting skills most requested by SAP partners worldwide.",
      "Explored planning and project management methodologies such as Waterfall, Agile, DevOps, and Cloud.",
      "Understood the global SAP business solutions, products and ecosystem.",
      
      ],
    },
    {
      title: "J.P Morgan Chase & Co.",
      company_name: "Software Engineer(Virtual Experience)",
      icon: tesla,
      iconBg: "#E6DEDD",
      
      points: [
      "Made an Interface with a stock price data feed",
      "Displayed data visually for traders",
      "Open Source Contribution",

      ],
    },
    {
      title: "SalesForce Operations Professional",
      
      icon: shopify,
      iconBg: "#383E56",
      
      points: [
      "Built reports, charts and dashboards in Salesforce to communicate relevant information about sales performance to stakeholders and executives.",
      "Salesforce Sales Cloud Lightning to manage accounts, opportunities, products, quotes, and contracts.",

      ],
    },
    {
      title: "B2B2C Market Specialization",
      
      icon: meta,
      iconBg: "#E6DEDD",
     
      points: [
      "Designed and redesign routes to market",
      "Structured and manage business partnerships for maximum returns",
      "Certification from Emory University",

      ],
    },
  ];
  
  const testimonials = [
   
  ];
  
  const projects = [
   
    {
      name: "InvestoInsight",
      description:
        "One-stop financial Advisor and get personalized recommendations, risk assessment, and real-time insights on a user-friendly platform. Helps in management and notification updates about latest news.",
      tags: [
        {
          name: "Data Analysis",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js",
          color: "green-text-gradient",
        },
        {
          name: "Investment Algo",
          color: "pink-text-gradient",
        },
      
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "VisionSnip",
      description:
        "Seamless integration of snipping tool, OCR, and table recognition. Instant transimissionn of data to an Open API for real-time analysis. Accurate answers for streamlined info extraction. ",
      tags: [
        {
          name: "Open API",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
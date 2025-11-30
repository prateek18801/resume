export default {
  header: {
    name: "Prateek Chaurasia",
    role: "Software Design Engineer",
    location: "Noida, Uttar Pradesh, India",
    email: "prateek18801@gmail.com",
    phone: "+91 8726127335",
    links: {
      linkedin: "linkedin.com/in/prateekchaurasia",
      github: "github.com/prateek18801",
      portfolio: "prateek18801.github.io/portfolio"
    }
  },
  about: "Software Design Engineer focused on accelerating automation by designing scalable, AI-driven user experiences and robust, high-performance backend systems.",
  achievements: [
    {
      title: "Winner, Smart India Hackathon 2022",
      description: "Developed BlockTrackers, a Blockchain-based food supply chain system (Node.js, Ethereum, MongoDB) that uses QR codes to trace farm products from seed to customer, ensuring end-to-end transparency and validation."
    },
    {
      title: "Runner Up, UNESCO India Africa Hackathon 2022",
      description: "Engineered KisanAssist, an AI-powered voice assistance center (PWA, Twilio) to resolve farmer queries. The solution leveraged early access to OpenAI GPT APIs (pre-ChatGPT launch), demonstrating deep skills in natural language processing and Twilio integration."
    },
    {
      title: "Finalist, Kavach Cybersecurity Hackathon 2023",
      description: "Led a team to build TrackPatrol, a real-time personnel monitoring system (MERN, TypeScript) for emergency duties, leveraging Raspberry Pi and IoT concepts to enhance tracking."
    }
  ],
  education: [
    {
      institution: "Dr. A.P.J. Abdul Kalam Technical University",
      degree: "Bachelor of Technology - B.Tech, Computer Science (SGPA 8.6)",
      location: "Ghaziabad, Uttar Pradesh",
      duration: "July 2020 - July 2024",
      description: []
    },
    {
      institution: "Aditya Birla Public School",
      degree: "Senior Secondary - Intermediate (95.2%)",
      location: "Jagdishpur, Uttar Pradesh",
      duration: "March 2019 - March 2020",
      description: []
    }
  ],
  experiences: [
    {
      position: "Software Design Engineer",
      company: "Newgen Software Technologies Ltd.",
      location: "On-site, Noida",
      duration: "July 2024 - December 2025",
      description: [
        "Contributed to the integration of Generative AI into the core platform by working on Marvin, the AI assistant; integrated OpenAI APIs and applied advanced prompt engineering to ensure the AI successfully generated BPMN-compliant business processes within the product suite.",
        "Modernized a critical service architecture by introducing advanced concurrency patterns (CompletableFuture) and an event-driven design using Spring Events, reducing average API response time from 12s to 3s (a 75% reduction in latency).",
        "Executed a complex, project-wide restructuring of all npm dependencies in one go, successfully eliminating all vulnerable packages without reporting a single defect.",
        "Achieved and maintained a sustained 0% bug density across the main branch and resolved over 230 total product defects and customer-reported issues with a 0% reopen rate and 98% SLA compliance index.",
        "Designed and made operational a Bugzilla MCP server and integrated it with VSCode Copilot, enabling developers to access, manage, and resolve bugs directly from their IDE.",
        "Championed the adoption of AI tools by creating and presenting a successful POC for GitHub Copilot, leading to the acquisition of licenses for the entire product team and projected productivity gains.",
        "Identified a high-risk gap in the hotfix release process (developer reliance on local binary builds) and facilitated the successful implementation of a new, automated hotfix package creation pipeline for the module in collaboration with the DevOps team, eliminating release errors and achieving a 0% blunder rate.",
      ],
    },
    {
      position: "Freelance Software Developer",
      company: "SND Digital Pvt. Ltd.",
      location: "Hybrid, Ghaziabad",
      duration: "January 2024 - June 2024",
      description: [
        "Developed and deployed three full-stack business applications (Shipment Tracking, Inventory Management, and Production Management) using the MERN stack.",
        "Significantly optimized manual workflows for returns management, reducing reconciliation time from an average of 6 hours to 3-4 minutes, while eliminating shipment label errors by implementing upfront duplicate label rejection, which drove ₹30k in estimated cost savings monthly.",
        "Designed the Shipment Tracking software for low-network conditions, and leveraged on-site business insights to ensure seamless integration with client e-commerce and logistics processes.",
      ],
    },
    {
      position: "Application Engineering Intern",
      company: "Fusionflow Technologies Pvt. Ltd.",
      location: "Remote, Hyderabad",
      duration: "December 2023 - Feburary 2024",
      description: [
        "Created POCs and demos for an API integration platform, demonstrating a strong understanding of OAuth2 and REST APIs.",
        "Gained experience working with Kafka, microservices architectures, Kong API Gateway, and microservice orchestration platforms.",
      ],
    }
  ],
  projects: [
    {
      title: "BlockTrackers - Blockchain based food supply chain tracking system",
      url: "https://blocktrackers.shahbaz42.live/",
      description: "This system traces farm products starting from seed sowing and makes it available to the customer via QR Codes.",
      stack: "Nodejs, Ethereum, MongoDB",
      learnings: "Ethereum, Blockchain, IoT, Bootstrap"
    },
    {
      title: "TrackPatrol - Tool for monitoring ground personnel",
      url: "https://trackpatrol-dashboard-dun.vercel.app/",
      description: "TrackPatrol is a system to track police personnel deployed on Bandobast Duties.",
      stack: "MERN, Tailwind, Typescript",
      learnings: "Tailwind, Typescript, Raspberry PI"
    },
    {
      title: "KisanAssist - Voice assisted contact centre for farmers",
      url: "https://prateek18801.github.io/kisan-assist/",
      description: "AI based voice assistant resolves problems faced by farmers.",
      stack: "PWA (Progressive web app), MERN, OpenAi GPT, Twilio",
      learnings: "Web Speech API, Handling Calls and SMS on the Backend"
    }
  ],
  responsibilities: [
    {
      position: "Head Coordinator",
      company: "Big Data Centre of Excellence - Technical Club in College",
      location: "",
      duration: "September 2021 - March 2024",
      description: [
        "Planned and organized over six major technical events (workshops, hackathons, coding contests), consistently engaging an average of 250 participants per event.",
        "Developed the official website backend and administrative dashboard, including a web-based attendance portal and event registration forms implemented with rate limiting and spam protection."
      ]
    }
  ],
  skills: [
    "Java",
    "Spring Boot",
    "Expressjs",
    "RESTful APIs",
    "Microservices",
    "Event Driven Architecture",
    "MSSQL, PostgreSQL, OracleDB",
    "Nextjs, Reactjs",
    "Nodejs",
    "Typescript",
    "Javascript",
    "MongoDB",
    "JBoss",
    "Generative AI Integration",
    "Prompt Engineering",
    "MCP Server",
    "BPMN Compliance",
    "Docker",
    "HTML, CSS",
    "C/C++",
    "Git"
  ]
}
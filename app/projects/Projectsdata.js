// projectsData.js

const projects = [
    {
      id: "project1",
      title: "Product Development Intern @ SP Group (SP Digital)",
      description: "Product Development, Product Management, Data Analytics and Visualisation",
      techStack: ["SQL", "BigQuery", "Google Looker Studio", "JIRA", "Confluence"],
      githubLink: "",
      images: ["image1.png", "image2.png"],
      role: [
        "Conceptualized and improved features through research and data analysis.",
        "Analyzed user feedback and data insights to enhance existing features and resolve bugs.",
        "Created documentation on Jira/Confluence, developed rollout plans, and release checklists.",
        "Designed high-fidelity prototypes using Figma for initiatives like a data dashboard and AI Chatbot.",
        "Developed a data dashboard with BigQuery and Looker Studio to visualize key metrics.",
        "Collaborated with Product and UX teams to integrate feedback into actionable insights."
      ],
      features: ["Product Data Dashboard for SP App", "AI Chatbot Proposal"],
      hideGitHubLink: true, // Hide GitHub link
      hideImages: true, // Show images for this project
      hideRole: true, // Show images for this project
    },
    {
      id: "project2",
      title: "Labella – TikTok TechJam 2024",
      description: "A data labelling platform that incorporates active learning techniques to aid the user in prioritising the most informative samples to label for machine learning. Achieved Top 15 out of 270 teams (Finalist)",
      techStack: ["Next.js", "Flask", "Celery", "Redis", "Pytorch", "modAL", "scikit-learn"],
      githubLink: "https://github.com/oliviaow2022/techjam",
      images: ["/labella.png"],
      role: ["Backend", "Developed object detection features of this project"],
      features: ["Create various machine learning projects, including image classification and sentiment analysis", "Upload their custom dataset or choose from existing ones in each project", "Label data with a user-friendly interface", "Prioritise more informative data" ,"Supports image classification (single and multi-label), sentiment analysis and object detection labelling", "Users can enhance accuracy and other performance metrics through iterative active learning"],
      hideGitHubLink: false, // Hide GitHub link
      hideImages: false, // Show images for this project
      hideRole: true, // Show images for this project
    //   https://devpost.com/software/labella
    },
    {
        id: "project3",
        title: "Work-From-Home (WFH) Tracking System",
        description: "A full-stack solution to manage employee schedules and WFH requests efficiently",
        techStack: ["Vue.js", "TailwindCSS", "Flask", "SQLAlchemy"],
        githubLink: "https://github.com/sriyanope/IS212_G8T5",
        images: ["image3.png"],
        role: ["Backend"],
        features: ["Employees can view their own schedule and team schedule", "Employees can apply for WFH requests", "Managers can approve/reject WFH requests", "Role based access for different types of employees", "Deployed on Netlify and Render", "CI/CD pipeline with Github Actions"],
        hideGitHubLink: false, // Hide GitHub link
        hideImages: true, // Show images for this project
        hideRole: true, // Show images for this project
      },
      {
        id: "project4",
        title: "Personal Portfolio Website",
        description: "This is the website that you are currently on. Built with Next.js and React. Features smooth animations, dynamic content loading, and an intuitive user interface. The website showcases my projects, skills, and professional journey.",
        techStack: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Framer Motion",
          "Lucide React"
        ],
        githubLink: "https://github.com/crediblues/crediblues.github.io",
        images: ["image3.png"],
        role: ["Full Stack"],
        features: [
          "Responsive design that works seamlessly across all devices",
          "Smooth page transitions and animations using Framer Motion",
          "Dynamic project showcase with detailed project information",
          "Interactive UI elements with hover effects and animations",
          "Server-side rendering for optimal performance",
          "Type-safe development with TypeScript"
        ],
        hideGitHubLink: false, // Hide GitHub link
        hideImages: true, // Show images for this project
        hideRole: true, // Show images for this project
      }
  ];
  
  export default projects;
  
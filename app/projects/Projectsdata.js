// projectsData.js

const projects = [
    {
      id: "project1",
      title: "Labella – TikTok TechJam 2024 Finalist",
      description: "A data labelling platform that incorporates active learning techniques to aid the user in prioritising the most informative samples to label for machine learning. Achieved Top 15 out of 270 teams (Finalist)",
      techStack: ["Next.js", "Flask", "Celery", "Redis", "Pytorch", "modAL", "scikit-learn"],
      githubLink: "https://github.com/oliviaow2022/techjam",
      images: ["/labella.png"],
      role: ["Backend", "Developed object detection features of this project"],
      features: ["Create various machine learning projects, including image classification and sentiment analysis", "Upload their custom dataset or choose from existing ones in each project", "Label data with a user-friendly interface", "Prioritise more informative data" ,"Supports image classification (single and multi-label), sentiment analysis and object detection labelling", "Users can enhance accuracy and other performance metrics through iterative active learning"],
      hideGitHubLink: false, // Hide GitHub link
      hideImages: false, // Show images for this project
      hideRole: false, // Show images for this project
    //   https://devpost.com/software/labella
    },
    {
        id: "project2",
        title: "Work-From-Home (WFH) Tracking System",
        description: "A full-stack solution to manage employee schedules and WFH requests efficiently",
        techStack: ["Vue.js", "TailwindCSS", "Flask", "SQLAlchemy"],
        githubLink: "https://github.com/sriyanope/IS212_G8T5",
        images: [""],
        role: ["Backend"],
        features: ["Employees can view their own schedule and team schedule", "Employees can apply for WFH requests", "Managers can approve/reject WFH requests", "Role based access for different types of employees", "Deployed on Netlify and Render", "CI/CD pipeline with Github Actions"],
        hideGitHubLink: false, // Hide GitHub link
        hideImages: true, // Show images for this project
        hideRole: false, // Show images for this project
      },
      {
        id: "project3",
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
        images: [""],
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
      },
      {
        id: "project4",
        title: "Geospatial Analytics Using R ",
        description: "Coursework for Geospatial Analytics and Applications",
        techStack: [
          "R",
          "tidyverse, sf",
          "spdep, tmap, ggplot2",
          "spatstat",
          "dplyr, corrplot",
          "olsrr, GWmodel",
          "shiny, leaflet"
        ],
        githubLink: "https://is415-geospatial-with-wenxian.netlify.app/",
        images: ["/geosp.png"],
        role: ["Full Stack"],
        features: [
          "Data Import and Transformation: Aspatial / Geospatial Data",
          "Data Analysis: EDA / Multivariate Analysis",
          "Mapping and Visualization",
          "Spatial Analytics: SPPA, ",
          "Geographically weighted regression (GWR) "
        ],
        hideGitHubLink: false, // Hide GitHub link
        hideImages: false, // Show images for this project
        hideRole: true, // Show images for this project
      },
      {
        id: "project5",
        title: "Carexplorer: Analysing spatial patterns and accessibility regarding Eldercare Facilities and CHAS Clinics in Singapore ",
        description: "Singapore's rapidly aging population underscores the importance of equitable access to essential services for elderly residents. Eldercare facilities provide vital support such as daycare and respite care, while CHAS (Community Health Assist Scheme) clinics offer subsidized healthcare services. This application leverages geospatial analyses, including Spatial Point Pattern Analysis (SPPA) and Geographical Accessibility Modelling, to evaluate the spatial alignment of eldercare facilities and CHAS clinics. This application aims to identify underserved areas and support informed urban planning decisions.",
        techStack: [
          "shinycssloaders",
          "shiny",
          "spatstat",
          "sf, dplyr, tidyverse",
          "raster, tmap, leaflet",
          "SpatialAcc",
          "units"
        ],
        githubLink: "https://carexplorer.netlify.app/",
        images: ["/gaa_poster.png"],
        role: ["Full Stack"],
        features: [
          "Exploratory Spatial Data Visualization: Interactive mapping of eldercare facilities and CHAS clinics",
          "Spatial Point Pattern Analysis: Univariate and bivariate K-functions, Monte Carlo Simulations",
          "Geographical Accessibility Modelling: Hansen Accessibility Model, Spatial Accessibility Model",
          "Dynamic Visualization: Interactive maps displaying accessibility scores and patterns"
        ],
        hideGitHubLink: false, // Hide GitHub link
        hideImages: false, // Show images for this project
        hideRole: true, // Show images for this project
      },
      {
        id: "project6",
        title: "Data Analytics Portfolio ",
        description: "Projects include ML for hotel no-show prediction, geospatial analysis of Singapore rental trends, and aviation incident insights using Python, SQL & Tableau. Built end-to-end pipelines, performed EDA, and developed predictive models.",
        techStack: [
          "Python, SQL",
          "Pandas, NumPy, Scikit-learn, Scipy, Matplotlib, Seaborn, Folium, Geopandas",
          "Scikit-learn",
          "SQLite",
          "Tableau",
          "Argparse, Pickle"
        ],
        githubLink: "https://github.com/crediblues/DataAnalytics",
        images: ["/gaa_poster.png"],
        role: ["Full Stack"],
        features: [
          "Machine Learning & Prediction: Built an ML pipeline to predict hotel no-shows and a regression model for house price prediction.",
          "Exploratory Data Analysis (EDA): Performed data cleaning, trend analysis, and visualization for aviation incidents, Titanic passengers, and rental housing data. ",
          "Geospatial Analytics: Mapped and analyzed Singapore's rental trends using geospatial visualization"
        ],
        hideGitHubLink: false, // Hide GitHub link
        hideImages: true, // Show images for this project
        hideRole: true, // Show images for this project
      }
  ];
  export default projects;
  
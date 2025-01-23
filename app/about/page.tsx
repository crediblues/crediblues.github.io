'use client'

import { motion } from "framer-motion"
import Navbar from "../components/Navbar"
import {
  Code,
  Database,
  FileSpreadsheet,
  FlaskRoundIcon as Flask,
  BarChart,
  FileCode,
  Cpu,
  BrainCircuit,
  Table,
} from "lucide-react"

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string;
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    icon: <Code size={32} />,
    skills: "Python, R, SQL, HTML, CSS, JavaScript",
  },
  {
    name: "Frameworks",
    icon: <Flask size={32} />,
    skills: "Flask, Next.js, Vue.js, Bootstrap, TailwindCSS",
  },
  {
    name: "Python Libraries",
    icon: <FileCode size={32} />,
    skills: "Pandas, NumPy, Matplotlib, Seaborn, scikit-learn, Pytorch",
  },
  {
    name: "SQL",
    icon: <Database size={32} />,
    skills:
      "Create, Alter, Insert, Select, Update, Merge, Drop, Truncate, Delete, Joins, CTE, Temp Tables, Indexes, Windows Functions, Aggregate Functions, Views, Stored Procedures",
  },
  {
    name: "R",
    icon: <FileSpreadsheet size={32} />,
    skills: "Tidyverse, Shiny",
  },
  {
    name: "Excel",
    icon: <Table size={32} />,
    skills: "Pivot tables, formulas (V-Lookup and others), data validation, and conditional formatting",
  },
  {
    name: "Databases",
    icon: <Database size={32} />,
    skills: "MySQL, BigQuery",
  },
  {
    name: "BI Tools",
    icon: <BarChart size={32} />,
    skills: "Tableau, Power BI, Google Looker Studio",
  },
  {
    name: "Data Modelling",
    icon: <BrainCircuit size={32} />,
    skills: "Lucid Chart",
  },
  {
    name: "Documentation",
    icon: <FileCode size={32} />,
    skills: "Confluence, JIRA",
  },
  {
    name: "Other",
    icon: <Cpu size={32} />,
    skills: "Product Management, Git, Docker",
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-[#FDF0F0]">
      <Navbar />
      <motion.main
        className="container mx-auto px-6 py-8 max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <section className="mb-12">
          <h1 className="text-2xl font-semibold text-[#132043] mb-4">About Me</h1>
          <div className="space-y-4 text-[#132043]">
            <p>
              Hello! I&apos;m Wen Xian, a third-year Information Systems student at Singapore Management University,
              specializing in data analytics and artificial intelligence.
            </p>
            <p>
              I thrive on using data to solve problems and create meaningful solutions that enhance people&apos;s lives.
              My experiences range from designing data dashboards and developing web applications to implementing
              machine learning solutions. These opportunities have deepened my passion for leveraging technology to
              drive strategic business decisions.
            </p>
            <p>
              My analytical mindset and proficiency with data-driven tools have been shaped through academic projects and
              professional experiences. Whether working on creating a data dashboard to visualize key metrics or
              collaborating with teams to develop AI solutions, I approach challenges with curiosity and a
              problem-solving attitude.
            </p>
            <p>
              I&apos;m constantly seeking to grow, whether by learning new technologies, diving deeper into AI and
              machine learning, or embracing hands-on projects that push me out of my comfort zone. I enjoy working
              collaboratively, as I believe teamwork is a powerful catalyst for innovation and personal growth.
            </p>
            <p>
              In my free time, I enjoy exploring new data science tools and techniques, honing my skills through personal
              projects, and taking on challenges that help me to expand my knowledge and skills.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#132043] mb-6">Skills and Expertise</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skillCategories.map((category, index) => (
              <SkillItem key={index} {...category} />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#132043] mb-4">Education</h2>
          <div className="text-[#132043]">
            <p>Singapore Management University: Bachelor of Science (Information Systems) - 2022 to 2026</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#132043] mb-4">Certification</h2>
          <div className="text-[#132043]">
            <a
              href="https://coursera.org/share/d242dab4c6ce76724e96a5ea9b8cb5e9"
              className="text-[#132043] hover:underline"
            >
              Google Data Analytics Professional Certificate
            </a>
          </div>
        </section>
      </motion.main>
    </div>
  )
}

function SkillItem({ name, icon, skills }: SkillCategory) {
  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-md aspect-square flex flex-col justify-center items-center text-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="mb-2 text-[#132043]">{icon}</div>
      <h3 className="text-lg font-semibold text-[#132043] mb-2">{name}</h3>
      <p className="text-xs text-gray-600 overflow-hidden">{skills}</p>
    </motion.div>
  )
}

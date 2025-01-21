'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-[#f8f0f0]">
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
              Hello! I'm Wen Xian, a third-year Information Systems student at Singapore Management University, specializing in
              data analytics and artificial intelligence.
            </p>
            <p>
              I thrive on using data to solve problems and create meaningful solutions that enhance people's lives. My
              experiences range from designing data dashboards and developing web applications to implementing machine
              learning solutions. These opportunities have deepened my passion for leveraging technology to drive strategic
              business decisions.
            </p>
            <p>
              My analytical mindset and proficiency with data-driven tools have been shaped through academic projects and
              professional experiences. Whether working on creating a data dashboard to visualize key metrics or collaborating
              with teams to develop AI solutions, I approach challenges with curiosity and a problem-solving attitude.
            </p>
            <p>
              I'm constantly seeking to grow, whether by learning new technologies, diving deeper into AI and machine learning,
              or embracing hands-on projects that push me out of my comfort zone. I enjoy working collaboratively, as I believe
              teamwork is a powerful catalyst for innovation and personal growth.
            </p>
            <p>
              In my free time, I enjoy exploring new data science tools and techniques, honing my skills through personal
              projects, and taking on challenges that help me to expand my knowledge and skills.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#132043] mb-4">Skills and Expertise</h2>
          <ul className="list-disc list-inside space-y-2 text-[#132043]">
            <li>Languages: Python, R, SQL, HTML, CSS, JavaScript</li>
            <li>Frameworks: Flask, Next.js, Vue.js, Bootstrap, TailwindCSS</li>
            <li>Python: Pandas, NumPy, Matplotlib, Seaborn, scikit-learn, Pytorch</li>
            <li>SQL: Create, Alter, Insert, Select, Update, Merge, Drop, Truncate, Delete, Joins, CTE, Temp Tables, Indexes, Windows Functions, Aggregate Functions, Views, Stored Procedures.</li>
            <li>R: Tidyverse, Shiny</li>
            <li>Excel: Pivot tables, formulas (V-Lookup and others), data validation, and conditional formatting.</li>
            <li>Databases: MySQL, BigQuery</li>
            <li>BI Tools: Tableau, Power BI, Google Looker Studio</li>
            <li>Data Modelling: Lucid Chart</li>
            <li>Documentation Tools: Confluence, JIRA</li>
            <li>Other: Product Management, Git, Docker</li>
          </ul>
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
            <Link href="https://coursera.org/share/d242dab4c6ce76724e96a5ea9b8cb5e9" className="text-[#132043] hover:underline">
              Google Data Analytics Professional Certificate
            </Link>
          </div>
        </section>
      </motion.main>
    </div>
  )
}

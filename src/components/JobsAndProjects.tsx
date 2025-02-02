import React from 'react'

import { Josefin_Sans } from "next/font/google"

const josefinSans = Josefin_Sans({ subsets: ["latin"] })

const jobs = [
  {
    title: "Software Engineer Intern",
    year: "June 2024 - September 2024",
    company: "Invasive Species Corporation",
    location: "Davis, CA",
    logo: "/placeholder.svg?height=80&width=80",
    description: [
      "Designed and implemented a MongoDB database to manage over 10,000 genomic sequences and species names, optimizing storage with a flexible schema and automating bulk data ingestion using Python and PyMongo.",
      "Integrated Python-based bioinformatics tools directly into a Next.js application using React libraries and ShadCN, streamlining their use within an interactive platform.",
      "Developed full-stack software solutions using Next.js and TypeScript to build front-end interfaces and back-end APIs for showcasing biotech tools.",
      "Enhanced query performance by 80% through efficient indexing on species names, enabling rapid retrieval for downstream analyses while maintaining data accuracy and integrity.",
    ],
  },
  {
    title: "Software Developer",
    year: "October 2024 - Present",
    company: "AggieWorks (School Club)",
    location: "Davis, CA",
    logo: "/placeholder.svg?height=80&width=80",
    description: [
      "Developed a front-end interface using JavaScript and QuickBase Pages to create a personalized club discovery experience, including custom dashboards and dynamic search filters with 2000+ visitors.",
      "Designed and implemented a back-end system leveraging QuickBase APIs and pipelines to automate workflows, such as user onboarding, club data updates, and recommendation generation, reducing operational overhead.",
      "Integrated React for modular UI components, Axios for streamlined API communication, and Chart.js for visualizing club engagement metrics, enhancing the user experience within the QuickBase platform.",
    ],
  },
]

const projects = [
  {
    name: "MunchLA",
    logo: "/placeholder.svg?height=80&width=80",
    description: [
      "Designed high-fidelity prototypes in Figma and developed a fully functional Next.js and Tailwind CSS application using TypeScript and ShadCN.",
      "Integrated user inputs with the backend using Next.js API routes, Fetch API, and MongoDB with Mongoose, enabling seamless data flow and efficient database operations.",
    ],
    link: "https://munchla.vercel.app/",
  },
  {
    name: "Physics Model Shooting",
    logo: "/placeholder.svg?height=80&width=80",
    description: [
      "Developed a real-time 3D physics simulation using Three.js for rendering and Ammo.js for realistic physics interactions, including rigid body dynamics, collisions, and gravity.",
      "Implemented custom GLSL shaders for advanced lighting effects such as dynamic shadows, reflections, and post-processing, enhancing visual realism.",
      "Optimized and deployed the application using Webpack and Babel, ensuring seamless integration of physics calculations, shaders, and 3D rendering while maintaining cross-browser compatibility.",
    ],
    link: "https://example.com/physics-model-shooting",
  },
  {
    name: "ML Sports Betting Predictor",
    logo: "/placeholder.svg?height=80&width=80",
    description: [
      "Built an interactive React.js web interface allowing users to select sports, view game predictions, and gain insights from AI-driven predictive analytics.",
      "Developed a sports betting AI web application using supervised machine learning algorithms (Logistic Regression, Random Forests) to analyze historical sports data and predict game outcomes with up to 70% accuracy.",
      "Cleaned and processed large datasets from Kaggle (e.g., NBA, NFL, Tennis) using Python, reducing data inconsistencies by 33% and optimizing feature selection for improved model performance.",
    ],
    link: "https://example.com/ml-sports-betting",
  },
]

const JobsAndProjects = () => {
  return (
    <div className={`py-16 ${josefinSans.className}`} id="content">
      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-16 water-text-effect text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-white bg-opacity-10 shadow-lg">
            <img src="/placeholder.svg?height=256&width=256" alt="Austin Kuo" className="object-cover w-full h-full" />
          </div>
          <div className="max-w-xl text-center md:text-left">
            <p className="text-lg mb-4 text-[#c9d1d9]">
              Hi, I'm Austin Kuo, a passionate Computer Science student at the University of California, Davis, with
              experience in full-stack development, machine learning, and 3D graphics programming.
            </p>
            <p className="text-lg text-[#c9d1d9]">
              I specialize in technologies like React, Next.js, MongoDB, and Python, and I enjoy building innovative
              projects that solve real-world problems.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-16 water-text-effect text-center">Experience</h2>
        <div className="max-w-full overflow-x-auto">
          <div className="p-4 flex space-x-8">
            {jobs.map((job, index) => (
              <div key={index} className="bg-[#1a1f24] p-8 rounded-lg w-96">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-white bg-opacity-10">
                    <img
                      src={job.logo || "/placeholder.svg"}
                      alt={`${job.company} logo`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{job.title}</h3>
                    <div className="text-[#8b949e] mb-1">
                      {job.company} - {job.location}
                    </div>
                    <div className="text-[#8b949e] text-sm">{job.year}</div>
                  </div>
                </div>
                <div>
                  <ul className="space-y-4">
                    {job.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-[#c9d1d9]">
                        <span className="mr-2">•</span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold mb-16 water-text-effect text-center">Projects</h2>
        <div className="max-w-full overflow-x-auto">
          <div className="p-4 flex space-x-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#1a1f24] p-8 rounded-lg w-96">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-white bg-opacity-10">
                    <img
                      src={project.logo || "/placeholder.svg"}
                      alt={`${project.name} logo`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
                  </div>
                </div>
                <div>
                  <ul className="space-y-4">
                    {project.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-[#c9d1d9]">
                        <span className="mr-2">•</span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-cyan-300 hover:text-cyan-400 transition-colors"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobsAndProjects

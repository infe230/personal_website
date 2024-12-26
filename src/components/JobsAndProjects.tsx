import React from 'react'
import Image from 'next/image'

const jobs = [
  {
    year: '2020 - Present',
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    logo: '/placeholder.svg?height=80&width=80',
    description: 'Led development of scalable web applications using React, Node.js, and AWS.'
  },
  {
    year: '2017 - 2020',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    logo: '/placeholder.svg?height=80&width=80',
    description: 'Developed and maintained e-commerce platforms using MERN stack.'
  },
  {
    year: '2015 - 2017',
    title: 'Junior Web Developer',
    company: 'WebCraft Studios',
    logo: '/placeholder.svg?height=80&width=80',
    description: 'Assisted in building responsive websites and web applications.'
  }
]

const projects = [
  {
    year: '2023',
    name: 'E-commerce Platform',
    image: '/placeholder.svg?height=200&width=300',
    description: 'Built a full-featured e-commerce platform with React, Node.js, and MongoDB.',
    link: 'https://example.com/project1'
  },
  {
    year: '2022',
    name: 'Task Management App',
    image: '/placeholder.svg?height=200&width=300',
    description: 'Developed a real-time task management application using React and Firebase.',
    link: 'https://example.com/project2'
  },
  {
    year: '2021',
    name: 'Portfolio Website',
    image: '/placeholder.svg?height=200&width=300',
    description: 'Created a dynamic portfolio website with Next.js and Three.js.',
    link: 'https://example.com/project3'
  }
]

const JobsAndProjects = () => {
  return (
    <div className="py-16" id="content">
      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-16 water-text-effect text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-64 h-64 rounded-full overflow-hidden bg-white bg-opacity-10 shadow-lg">
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="Austin Kuo"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
          <div className="max-w-xl text-center md:text-left">
            <p className="text-lg mb-4">
              Hi, I'm Austin Kuo, a passionate Full Stack Developer with over 5 years of experience in creating web applications. I specialize in React, Node.js, and cloud technologies.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-4xl font-bold mb-16 water-text-effect text-center">Experience</h2>
        <div className="timeline-container">
          {jobs.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white bg-opacity-10 company-logo-cube">
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-2xl font-semibold water-text-effect">{job.year}</div>
                    <p className="text-cyan-300">{job.company}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <p className="text-gray-300">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-4xl font-bold mb-16 water-text-effect text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-white bg-opacity-10 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(103,232,249,0.3)] h-full">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-lg font-semibold mb-1 water-text-effect">{project.year}</div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default JobsAndProjects


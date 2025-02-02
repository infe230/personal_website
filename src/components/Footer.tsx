import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-50 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-semibold water-text-effect">Austin Kuo</h3>
            <p className="text-sm">YaY Coding!</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/infe230" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
              GitHub
            </a>
            <a href="www.linkedin.com/in/austin-kuoo" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:austinkuo810@gmail.com" className="hover:text-cyan-300 transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


import React from 'react'

const ProjectCard = ({ title, description, image, tech, demo }) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      <img src={image} alt={title} className='w-full h-60 object-cover' />
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-6'>
          {tech.map((item, index) => (
            <span clas key={index} className='px-4 py-1 bg-dark-400 rounded-full text-sm'>
              {item}
            </span>
          ))}
        </div>
        <div className='flex'>
          <a href={demo}
           target="_blank" 
           rel="noopener noreferrer" 
           className='flex-1 text-center px-4 py-2 border border-[#8b5cf6] font-medium rounded-lg 
           hover:bg-[#8b5cf6]/20 trasnition duration-300  '>
            View Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

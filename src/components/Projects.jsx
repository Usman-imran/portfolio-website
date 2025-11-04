import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

const Projects = () => {
    const [showAll, setShowAll] = useState(false)
    
    const initialProjects = projects.slice(0, 3)
    const additionalProjects = projects.slice(3)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id="projects"
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>
                {/* Heading */}
                <h2 className='text-3xl font-bold text-center mb-4'>My
                    <span className='text-[#8b5cf6]'> Projects</span></h2>
                <p className='text-gray-400 text-center max-w-l mx-auto mb-20'>
                    A collection of AI-powered tools that simplify everyday tasks through full-stack development.</p>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {/* Pehle 3 Projects - Always Visible */}
                    {initialProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                    
                    {/* Additional Projects with CSS Transition */}
                    {additionalProjects.map((project, index) => (
                        <div 
                            key={index + 3}
                            className={`transition-all duration-500 ease-in-out ${
                                showAll 
                                    ? 'opacity-100 transform translate-y-0' 
                                    : 'opacity-0 transform -translate-y-4 h-0 overflow-hidden'
                            }`}
                            style={{
                                transitionDelay: showAll ? `${index * 100}ms` : '0ms'
                            }}
                        >
                            <ProjectCard {...project} />
                        </div>
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <button 
                        onClick={() => setShowAll(!showAll)}
                        className='inline-flex items-center px-6 py-3 border border-[#8b5cf6] rounded-lg font-medium hover:bg-[#8b5cf6]/20 transition duration-300'
                    >
                        <span>{showAll ? 'Show Less' : 'View More Projects'}</span>
                        {showAll ? (
                            <FaArrowLeft className='ml-2' />
                        ) : (
                            <FaArrowRight className='ml-2' />
                        )}
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects
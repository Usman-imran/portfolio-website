import React from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='home'
            className='min h-screen flex items-center pt-20 pb-16 bg-linear-to-r from[#1a1a1a] via-dark-300 to-dark-100'>
            <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>

                {/* Left Hand Side */}
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>Hi, I'm <span className='text-[#8b5cf6]'>Usman Imran</span></h1>
                    <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>Full Stack Developer</h2>
                    <p className='text-lg text-gray-300 mb-8'>Passionate about creating clean, efficient full-stack solutions
                        using TypeScript, Python, and modern frameworks.</p>
                    <div className='flex space-x-4'>
                        <a href="#projects" className='px-6 py-3 bg-[#8b5cf6] rounded-lg font-medium
                             hover:bg-purple-700 transition duration-300'>View Work</a>
                        <a href="#contact" className='px-6 py-3 bg-[#8b5cf6] rounded-lg font-medium
                             hover:bg-purple-700 transition duration-300'>Contact Me</a>
                    </div>
                </div>
                {/* Right Hand Side */}
                <div className='md:w-1/2 flex justify-center'>
                    <div className='relative w-64 h-64 md:w-80 md:h-80'>
                        <div className='absolute inset-0 rounded-full bg-linear-to-r from-purple-500 to-pink opacity-70'>
                            <motion.img
                                animate={{ y: [0, -20, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    ease: "easeInOut"
                                }}
                                className='realtive rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10'
                                src={assets.profileImg} alt="Profile" />
                        </div>

                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Hero

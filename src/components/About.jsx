import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id="about"
            className='py-20 bg-dark-200'
        >
            <div className='container mx-0 px-6'>
                {/* Heading */}
                <h2 className='text-3xl font-bold text-center mb-4'>About
                    <span className='text-[#8b5cf6]'> Me</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to Know More About My Background and Passion</p>
                {/* Left Hand Side (Image Section) */}
                <div className='flex flex-col md:flex-row items-center gap-12 ' >
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full  object-cover'
                            src={assets.profileImg} alt="profile" />
                    </div>
                    {/* Right Hand Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2 p-4'
                    >
                        <div className='rounded-2xl p-4 '>
                            <h3 className='text-2xl font-semibold mb-'>My Journey</h3>
                            <p className='text-gray-300 mb-6'>
                                I am a passionate and results-driven entry-level software developer with a strong focus on creating
                                impactful user experiences through modern web technologies. My core expertise lies in
                                building dynamic and scalable web applications using ReactJS and NextJS.</p>

                            <p className='text-gray-300 mb-12'>
                                I complement this with the power of Python and the OpenAI SDK to integrate intelligent, AI-driven features,
                                aiming to automate complex tasks and create smarter solutions. For me, development is not just about writing code,
                                but about crafting clean, efficient, and user-centric applications that solve real-world problems effectively.</p>

                            {/* Cards */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((data, index) =>
                                        <div key={index}
                                            className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 
                                                         hover:-translate-y-2 cursor-pointer '>
                                            <div className='text-[#8b5cf6] text-4xl mb-4'>
                                                <data.icon />
                                            </div>
                                            <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                            <p className='text-gray-400'>{data.description}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default About

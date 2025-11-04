import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [isSending, setIsSending] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSending(true)

        // EmailJS configuration 
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: 'Usman Imran'
        }

        emailjs.send(
            'service_c4iz089', // SERVICE ID 
            'template_lkz66ri', // TEMPLATE ID 
            templateParams,
            'AhHwfczDMsGmWRPJc' // PUBLIC KEY 
        )
        .then((response) => {
            alert('Message sent successfully! ✅')
            setFormData({ name: '', email: '', message: '' })
        })
        .catch((error) => {
            console.error('EmailJS Error:', error)
            alert('Failed to send message. Please try again. ❌')
        })
        .finally(() => {
            setIsSending(false)
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id="contact"
            className='py-20 bg-dark-200'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-bold text-center mb-4'>Get In
                    <span className='text-[#8b5cf6]'> Touch</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a Project in Mind or Want to Collaborate? Let's Talk!</p>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                    {/* Contact Form */}
                    <div>
                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                                <input 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' 
                                type="text"
                                required />
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                                <input 
                                name="email"
                                value={formData.email}
                                onChange={handleChange} 
                                className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' 
                                type="email"
                                required/>
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                                <textarea 
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className='w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' 
                                type="text" 
                                required/>
                            </div>
                            <button type='submit' className='w-full px-6 py-3 bg-[#8251f3] rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>
                                Send Message
                            </button>
                        </form>
                    </div>
                    {/* Contact Information */}
                    <div className='space-y-8'>
                        <div className='flex items-start'>
                            <div className='text-[#8b5cf6] text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Karachi, Pakistan</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-[#8b5cf6] text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>usmanimran4121812@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-[#8b5cf6] text-2xl mr-4'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p className='text-gray-400'>+92 319 4996340</p>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                            <div className='flex space-x-4 '>
                                <a href="https://github.com/Usman-imran" 
                                target='_blank'
                                rel="noopener noreferrer"
                                className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-[#8b5cf6] 
                                            hover:bg-[#8b5cf6] hover:text-white transition duration-300'>
                                    <FaGithub />
                                </a>

                                <a href="https://www.linkedin.com/in/usman-imran-a978022b4/" 
                                target='_blank'
                                rel="noopener noreferrer"
                                className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-600
                                            hover:bg-blue-600 hover:text-white transition duration-300'>
                                    <FaLinkedin />
                                </a>

                                <a href="#" 
                                // href="https://www.instagram.com/usman._.imran18/?hl=en" 
                                // target='_blank'
                                // rel="noopener noreferrer"
                                className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-red-400 
                                            hover:bg-red-400  hover:text-white transition duration-300'>
                                    <FaInstagram />
                                </a>

                                <a href="#" 
                                // href="https://www.facebook.com/usman.imran.7334504" 
                                // target='_blank'
                                // rel="noopener noreferrer"
                                className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-500 
                                            hover:bg-blue-500 hover:text-white transition duration-300'>
                                    <FaFacebook />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}

export default Contact

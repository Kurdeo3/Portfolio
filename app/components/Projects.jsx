import React from 'react'
import Image from 'next/image'
import { assets, workData } from '@/assets/assets'
import { motion } from "motion/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Projects = () => {
    return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 1, delay: 0.3}}
        className='text-center text-5xl font-ovo'>My Projects</motion.h2>
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center mb-2 text-lg font-ovo'>Here are some of the projects I've worked on.</motion.h4>

        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="flex flex-wrap justify-center my-6 gap-6"
        >
        {workData.map((projects, index) => (
            <motion.div
            initial={{ 
            opacity: 0, 
            x: index % 2 === 0 ? -100 : 100 
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            key={index}
            className="w-full md:w-[48%] bg-white rounded-xl shadow-md p-4 border-1 border-green-900 hover:shadow-[0_0_10px_2px_rgba(75,85,99,0.5)] transition-shadow duration-300"
            >

            <Swiper spaceBetween={10} slidesPerView={1} className="w-full h-[300px] rounded-xl overflow-hidden mb-4">
                {projects.bgImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                    <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${img})` }}
                    />
                </SwiperSlide>
                ))}
            </Swiper>

            <div className="group flex items-center justify-between bg-white px-5 py-3 rounded-md shadow group-hover:bottom-6 duration-300">
                <div>
                <h2 className="font-semibold text-2xl">{projects.title}</h2>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-400 transition">
                    <a href={projects.link}><Image src={assets.send_icon} alt="Send icon" className="w-5 cursor-pointer"/></a>
                </div>
            </div>

            <div className="mt-4 px-2 text-justify text-sm text-gray-700">
                <p className="mt-2">{projects.description}</p>
            </div>
            
            {projects.techIcons?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
                {projects.techIcons.map((icon, i) => (
                <div
                    key={i}
                    className="border rounded-full border-2 border-green-900 w-9 aspect-square flex items-center justify-center"
                >
                    <Image src={icon} alt="tech icon" className="w-5" />
                </div>
                ))}
            </div>
            )}
            </motion.div>
        ))}
        </motion.div>
    </motion.div>
    )
}

export default Projects

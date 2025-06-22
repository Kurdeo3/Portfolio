import { assets, infoList, toolsData, timelineList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = () => {
    return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 1, delay: 0.3}}
        className='text-center mb-2 text-lg font-ovo'>Get to know me more</motion.h4>
        
        <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-ovo'>About Me</motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-5'>
            <motion.div 
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            className='w-64 sm:w-100 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='User Image' className='w-full rounded-2xl'/>
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8, delay: 0.6}}
            className='flex-1'>
                <p className='mb-7'>
                    I’m Eulogius Kurdeo Hesay (Deo), a 6th-semester Informatics student at Universitas Atma Jaya Yogyakarta with a strong interest in software development. My focus lies in full-stack development, particularly in building web applications and managing databases. 
                    I’m driven by a strong curiosity and a passion for continuous learning, always eager to solve problems and take on new challenges. I believe in the power of collaboration and strive to contribute to meaningful, high-impact solutions through teamwork and innovation.
                </p>

                <motion.ul 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 1}}
                className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl'>
                    {infoList.map(({icon,iconDark, title, description}, index)=>(
                    <motion.li 
                    whileHover={{ scale: 1.05 }}
                    className="group border-2 border-green-900 rounded-xl p-4
                                hover:bg-semidarkHover hover:-translate-y-1 duration-500 hover:shadow-boxShadowBlack" 
                    key={index}
                    >
                    <Image src={icon} alt={title} className="w-7 mt-3 group-hover:brightness-0 group-hover:invert" />
                    <h3 className="my-2 font-semibold text-gray-700 group-hover:text-white">{title}</h3>

                    {Array.isArray(description) ? (
                        <ul className="text-gray-600 text-sm list-disc list-inside space-y-2 mb-2 group-hover:text-white">
                        {description.map((item, i) => {
                            const isObject = typeof item === "object" && item !== null;
                            const text = isObject ? item.text : item;
                            const year = isObject ? item.year : null;

                            return (
                            <li key={i} className="flex justify-between items-start">
                                <span className="group-hover:text-white">{text}</span>
                                {year && (
                                <span className="ml-2 text-gray-500 text-xs italic whitespace-nowrap group-hover:text-gray-200">
                                    {year}
                                </span>
                                )}
                            </li>
                            );
                        })}
                        </ul>
                    ) : (
                        <p className="text-gray-600 text-sm mb-2 group-hover:text-white">{description}</p>
                    )}
                    </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
    )
}

export default About

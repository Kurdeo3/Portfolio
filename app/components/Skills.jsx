import React from 'react'
import Image from 'next/image'
import { assets, programmingLanguageList, frameworksList, databasesList, developmentToolsList } from '@/assets/assets'
import { motion } from "motion/react"

const Skills = () => {
    return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='skills' className='w-full px-[12%] py-10 scroll-mt-20'>
        <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 1, delay: 0.3}}
        className='text-center text-5xl font-ovo'>Technical Skills</motion.h2>
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center mb-8 text-lg font-ovo'>What I've been learned</motion.h4>

            <div className='flex flex-col md:flex-row gap-6 px-4 md:px-10'>
            <motion.div 
            className='w-full md:w-1/2 md:pr-6 md:border-r border-gray-300'>
                <h3 className='text-center text-2xl font-ovo'>Programming Languages</h3>
                <motion.div 
                initial={{x: -50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.3, delay: 0.9}}
                className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-5'>
                {programmingLanguageList.map(({ icon, title }, index) => (
                    <div
                    key={index}
                    className='border-2 border-green-900 rounded-xl p-3
                        hover:bg-semidarkHover hover:-translate-y-1 hover:text-white duration-500 hover:shadow-boxShadowBlack'
                    >
                    <Image src={icon} alt='icon' className='w-8 mx-auto' />
                    <h3 className='text-sm text-gravy-700 text-center mt-1'>{title}</h3>
                    </div>
                ))}
                </motion.div>
            </motion.div>

            <div className='w-full md:w-1/2'>
                <h3 className='text-center text-2xl font-ovo'>Frameworks & Libraries</h3>
                <motion.div 
                initial={{x: 50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.3, delay: 0.9}}
                className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-5'>
                {frameworksList.map(({ icon, title }, index) => (
                    <div
                    key={index}
                    className='border-2 border-green-900 rounded-xl p-3
                        hover:bg-semidarkHover hover:-translate-y-1 hover:text-white duration-500 hover:shadow-boxShadowBlack'
                    >
                    <Image src={icon} alt='icon' className='w-8 mx-auto' />
                    <h3 className='text-sm text-gravy-700 text-center mt-1'>{title}</h3>
                    </div>
                ))}
                </motion.div>
            </div>
            </div>

            <div className='flex flex-col md:flex-row gap-6 px-4 md:px-10 mt-8'>
            <div className='w-full md:w-1/2 md:pr-6 md:border-r border-gray-300'>
                <h3 className='text-center text-2xl font-ovo'>Databases</h3>
                <motion.div 
                initial={{x: -50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.3, delay: 0.9}}
                className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-5'>
                {databasesList.map(({ icon, title }, index) => (
                    <div
                    key={index}
                    className='border-2 border-green-900 rounded-xl p-3
                        hover:bg-semidarkHover hover:-translate-y-1 hover:text-white duration-500 hover:shadow-boxShadowBlack'
                    >
                    <Image src={icon} alt='icon' className='w-8 mx-auto' />
                    <h3 className='text-sm text-gravy-700 text-center mt-1'>{title}</h3>
                    </div>
                ))}
                </motion.div>
            </div>

            <div className='w-full md:w-1/2'>
                <h3 className='text-center text-2xl font-ovo'>Development Tools</h3>
                <motion.div 
                initial={{x: 50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.3, delay: 0.9}}
                className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-5'>
                {developmentToolsList.map(({ icon, title }, index) => (
                    <div
                    key={index}
                    className='border-2 border-green-900 rounded-xl p-3
                        hover:bg-semidarkHover hover:-translate-y-1 hover:text-white duration-500 hover:shadow-boxShadowBlack'
                    >
                    <Image src={icon} alt='icon' className='w-8 mx-auto' />
                    <h3 className='text-sm text-gravy-700 text-center mt-1'>{title}</h3>
                    </div>
                ))}
                </motion.div>
            </div>
            </div>

    </motion.div>
    )
}




export default Skills

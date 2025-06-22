import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"
import RotatingText from './RotatingText'

const Header = () => {
    return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 1.5, type: 'spring', stiffness: 100}}
        >
            <Image src={assets.profile_img} alt='Profile pic' className='rounded-full w-30 border-3 border-black'/>
        </motion.div>
            
        <motion.h1 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-1xl sm:text-4xl lg:text-[50px] font-ovo'>Hi! I'm Deo
        </motion.h1>

        <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex items-center justify-center gap-2 text-xl sm:text-md lg:text-[30px] font-ovo"
        >
        Interested&nbsp;in&nbsp;
        <RotatingText
            texts={["Web Development", "Full-Stack Development", "Database"]}
            mainClassName="text-green-900 px-1 rounded-lg"
            rotationInterval={2000}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        </motion.h1>
        
        <motion.p 
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}}
        className='max-w-2xl mx-auto font-ovo'>
            I'm a 6th-semester Informatics Student at Universitas Atma Jaya Yogyakarta, passionate about Software 
            Development with a strong interest in web development and database as a full-stack developer.
        </motion.p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            
            <motion.a href="#contact"
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1}}
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'>
                Contact me <Image src={assets.right_arrow_white} alt='Right arrow' className='w-4'/>
            </motion.a>

            <motion.a href="/Eulogius Kurdeo Hesay-resume.pdf" 
            initial={{y: 30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.2}}
            download 
            className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                Curriculum Vitae (CV) <Image src={assets.download_icon} alt='Download icon' className='w-4'/>
            </motion.a>
        </div>
    </div>
    )
}

export default Header

import { assets } from '@/assets/assets'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from "motion/react"

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "447438b5-eeb4-4374-a266-65f7633fbbc6");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-12 bg-[url("/footer-bg-color.png")] 
    bg-no-repeat bg-center bg-[length:90%_auto]'>
        <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 1, delay: 0.3}}
        className='text-center text-5xl font-ovo'>Connect with Me</motion.h2>
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center mb-5 text-lg font-ovo'>Get in touch</motion.h4>

        <div className='flex gap-4 flex-wrap justify-center'>
        <motion.div 
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.5, delay: 0.5}}
            className='group flex items-center justify-center w-1/10 min-w-[120px] p-2 border border-gray-400 rounded-xl 
            hover:bg-semidarkHover hover:-translate-y-1 hover:text-white hover:border-pink-500 duration-500 hover:shadow-boxShadowBlack'>

            <a href="https://www.instagram.com/kurdeo_3" className='flex flex-col items-center text-sm text-black'>
            <Image src={assets.instagram} alt='Instagram' className='w-8 h-8' />
            <span className='group-hover:text-white transition duration-300'>Kurdeo3</span>
            </a>
        </motion.div>

        <motion.div 
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.5, delay: 0.5}}
            className='group flex items-center justify-center w-1/10 min-w-[120px] p-2 border border-gray-400 rounded-xl 
            hover:bg-semidarkHover hover:-translate-y-1 hover:text-white hover:border-pink-500 duration-500 hover:shadow-boxShadowBlack'>

            <a href="https://github.com/Kurdeo3" className='flex flex-col items-center text-sm text-black'>
            <Image src={assets.github} alt='GitHub' className='w-8 h-8' />
            <span className='group-hover:text-white transition duration-300'>Kurdeo3</span>
            </a>
        </motion.div>

        <motion.div 
            initial={{opacity: 0, y: -20}}
            whileInView={{opacity: 1, y:0}}
            transition={{duration: 0.5, delay: 0.5}}
            className='group flex items-center justify-center w-1/10 min-w-[120px] p-2 border border-gray-400 rounded-xl 
            hover:bg-semidarkHover hover:-translate-y-1 hover:border-pink-500 duration-500 hover:shadow-boxShadowBlack'>

            <a href="https://www.linkedin.com/in/eulogius-kurdeo-hesay-863923258/" className='flex flex-col items-center text-sm text-black'>
            <Image src={assets.linkedin} alt='LinkedIn' className='w-8 h-8' />
            <span className='group-hover:text-white transition duration-300'>EulogiusKurdeoH</span>
            </a>
        </motion.div>
        </div>

        <motion.form 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.9}}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-5 mb-8'>
                <motion.input 
                initial={{x: -50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1.1}}
                type="text" placeholder='Enter your name' required name='name'
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white'/>
                <motion.input 
                initial={{x: 50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1.1}}
                type="text" placeholder='Enter your email' required name='email'
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white'/>
            </div>
            <motion.textarea 
            initial={{y: 100, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.3}}
            rows='6' placeholder='Enter your message' required name='message'
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6'>
            </motion.textarea>
            <motion.button 
                whileHover={{scale: 1.05}}
                transition={{duration: 0.3}}
                type='submit'
                className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white 
                rounded-full mx-auto hover:bg-black duration-500'>
                Submit Now <Image src={assets.right_arrow_white} alt='right arrow' className='w-4'/>
            </motion.button>

            <p className='mt-4'>{result}</p>
        </motion.form>
    </motion.div>
    )
}

export default Contact

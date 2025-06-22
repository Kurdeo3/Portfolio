import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>  
                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='mail icon' className='w-6'/>
                    eulogiusHesay@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>2025 Eulogius Kurdeo Hesay. Personal Portfolio Website.</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://www.instagram.com/kurdeo_3">Instagram</a></li>
                    <li><a target='_blank' href="https://github.com/Kurdeo3"></a>Github</li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/eulogius-kurdeo-hesay-863923258/">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer

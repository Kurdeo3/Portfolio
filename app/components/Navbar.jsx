import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)   

    useEffect(() => {
    const onScroll = () => setIsScroll(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={assets.header_bg_color} alt='Header Color' className='w-full'/>
        </div>

        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[5%] py-4 flex items-center justify-between z-50 
        ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
            <a href="#top">
                <h1 className='text-4xl sm:text-4xl lg:text-[45px] font-ovo'>Deo</h1>
            </a>

            <ul className={`hidden md:flex items-center gap-8 lg:gap-8
            rounded-full px-14 py-2 ${isScroll ? "" : "bg-white shadow-lg bg-opacity-50"}`}>
                <li><a className='font-ovo hover:text-green-900' href="#top">Home</a></li>
                <li><a className='font-ovo hover:text-green-900' href="#about">About</a></li>
                <li><a className='font-ovo hover:text-green-900' href="#skills">Skills</a></li>
                <li><a className='font-ovo hover:text-green-900' href="#projects">Projects</a></li>
                <li><a className='font-ovo hover:text-green-900' href="#contact">Contact</a></li>
            </ul>

            <div className="flex items-center gap-1 px-2 lg:pl-11 md:pl-0 pl-0">
                <button className="block md:hidden ml-3 cursor-pointer transition-transform duration-300" 
                        onClick={() => setMenuOpen(!menuOpen)}>
                    <Image 
                        src={menuOpen ? assets.close_black : assets.menu_black} 
                        alt={menuOpen ? "Close" : "Menu"} 
                        className="w-5" 
                    />
                </button>
            </div>

            <div
                className={`md:hidden fixed left-0 w-full bg-white shadow-lg z-40 transition-all duration-300 ease-in-out
                ${menuOpen ? 'top-[80px] opacity-100' : 'top-[-300px] opacity-0'}`}
                style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
            >
                <ul className="px-5">
                    <li>
                        <a className="font-ovo block py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-green-800 hover:translate-x-2" 
                            href="#top" 
                            onClick={() => setMenuOpen(false)}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="font-ovo block py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-green-800 hover:translate-x-2" 
                            href="#about" 
                            onClick={() => setMenuOpen(false)}>
                            About
                        </a>
                    </li>
                    <li>
                        <a className="font-ovo block py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-green-800 hover:translate-x-2" 
                            href="#skills" 
                            onClick={() => setMenuOpen(false)}>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a className="font-ovo block py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-green-800 hover:translate-x-2" 
                            href="#projects" 
                            onClick={() => setMenuOpen(false)}>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a className="font-ovo block py-3 px-4 rounded-lg transition-all duration-300 hover:bg-gray-100 hover:text-green-800 hover:translate-x-2" 
                            href="#contact" 
                            onClick={() => setMenuOpen(false)}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>

            {menuOpen && (
                <div 
                    className="md:hidden fixed inset-0 bg-opacity-50 z-30"
                    onClick={() => setMenuOpen(false)}
                    style={{ top: '80px' }}
                ></div>
            )}
        </nav>   
    </>
    )
}

export default Navbar

"use client"

//Libraries
import { motion } from 'framer-motion'

//Icons
import { BsFillTriangleFill } from "react-icons/bs"
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from 'react-icons/ai'

//Hooks
import { useState } from "react"

//Data
import { headerData } from "../../data/data"
import Logo from '../SVG/logo'

export default function Header() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [rotated, setRotated] = useState(false)

    const toggleMenu = () => {
        setMenuOpen((current) => !current)
        setRotated((current) => !current)
    }

    const navInfo = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const toggleHamburger = () => {
        setHamburgerOpen((current) => !current)
    }

    const container = {
        hidden: { opacity: 1 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                staggerDirection: -1,
            },
        },
    }

    const navitem = {
        hidden: {
            opacity:0,
        },
        show: {
            opacity:1,
        },
    }

    return (
        <header className="h-[90px] bg-white shadow-lg">
            <div className="container h-full flex items-center justify-between">
                <div className="w-[200px]">
                    <Logo />
                </div>
                <div className="hidden md:flex h-[60px] gap-6 items-center mb-0">
                    {menuOpen && (
                        <motion.div
                            className="flex sm:flex-row flex-col sm:gap-6 gap-3"
                            variants={container}
                            initial="hidden"
                            animate="show"
                            exit="hidden"
                        >
                            {headerData.map((item: any, index: number) => (
                                <motion.a key={index} variants={navitem} href={item.link.url} className='hover:scale-110 hover:cursor-pointer !mb-0'>
                                    {item?.link?.title}
                                </motion.a>
                            ))}
                        </motion.div>
                    )}
                    <BsFillTriangleFill
                        className={`hover:cursor-pointer transition-all ${rotated ? '-rotate-90' : ''}`}
                        onClick={toggleMenu}
                    />
                </div>
                <div className='flex md:hidden'>
                    <RxHamburgerMenu className='text-2xl' onClick={toggleHamburger} />
                    {hamburgerOpen && (
                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            exit="hidden" 
                            variants={navInfo}
                            className='bg-white fixed z-50 inset-0 w-screen h-screen flex justify-center'>
                            <div className='container'>
                                <div className="h-[90px] flex items-center justify-between">
                                    <div className="w-[200px]">
                                        <Logo />
                                    </div>
                                    <AiOutlineClose className='text-2xl' onClick={toggleHamburger} />
                                </div>
                                <ul>
                                {headerData.map((item: any, index: number) => (
                                    <motion.li                  
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <a key={index} href={item.link.url} onClick={toggleHamburger} className='hover:scale-110 hover:cursor-pointer !mb-0'>
                                            {item?.link?.title}
                                        </a>
                                    </motion.li>
                                ))}
                                </ul>
                            </div>
                            
                        </motion.div>
                    )}
                </div>
            </div>
        </header>
    )
}
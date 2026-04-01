import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Contact", href: "#contact" },
];


const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='fixed top-0 left-0 right-0 z-50 bg-(--bg-main) backdrop-blur-lg shadow'>
            <div className='w-11/12 mx-auto flex items-center justify-between h-20 px-6'>
                 <a 
                 href="#home" 
                className="text-(--green) font1  text-2xl font-bold"
               >
                 Terra<span className='text-(--accent) ml-0.5 font1'>Verde</span>
                </a>
                {/* desktop */}
                <ul className='hidden md:flex items-center gap-7'>
                    {
                        navLinks.map(link => (
                            <li key={link.href}>
                                <a href={link.href} className='text-sm font font-medium text-(--text2) hover:text-(--text) transition-colors duration-300'>{link.label}</a>
                            </li>
                        ))
                    }
                </ul>
                <button className='px-4 py-2 rounded-full hidden bg-(--green) md:inline-flex items-center'>
                    <a href="#contact" className='font-semibold text-white'>Get Started</a>
                </button>

                <button onClick={() => setOpen(!open)} className='text-(--text) md:hidden'>
                    {
                        open ? <X size={24}></X> : <Menu size={24}></Menu>
                    }
                </button>
            </div>
            
            {/* mobile menu  */}
            <AnimatePresence>
                {
                    open && (
                        <motion.div
                        initial={{opacity:0, height:0}}
                        animate={{opacity:1, height:"auto"}}
                        exit={{opacity:0, height:0}}
                        >
                        <ul className='flex flex-col gap-4 px-6 py-6'>
                            {
                        navLinks.map(link => (
                            <li key={link.href}>
                                <a href={link.href} className='text-sm font font-medium text-(--text2) hover:text-(--text) transition-colors duration-300'>{link.label}</a>
                            </li>
                        ))
                    }
                        <li>
                            <a href="#contact" className='px-4 py-2 rounded-full bg-(--green) inline-flex items-center font-semibold text-white'>Get Started</a>
                        </li>
                        </ul>                       
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
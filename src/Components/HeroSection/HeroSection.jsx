import React from 'react';
import { motion } from "framer-motion";
import heroFarm from '../../assets/hero-farm.jpg';

const HeroSection = () => {
    return (
        <section className='relative min-h-screen flex items-center overflow-hidden'>
            <div className="absolute inset-0">
                <img src={heroFarm} alt="" className='w-full h-full object-cover' />
                <div className='absolute inset-0 bg-linear-to-r from-green-950/80 to-green-950/50'></div>
            </div>
            <div className='w-11/12 relative z-10 mx-auto top-20 px-6 pb-20'>
                <div className='max-w-2xl'>
                    <motion.p
                    initial={{opacity: 0, y:20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{ duration: 0.6 }}
                    className='text-sm uppercase tracking-widest text-(--wheat) mb-6'
                    >
                        Sustainable Agriculture Solutions
                    </motion.p>

                    <motion.h1
                    initial={{opacity:0, y:30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay:0.15}}
                    className='font1 text-4xl md:text-6xl font-bold leading-[1.1] mb-6'>
                        Cultivating a <span className='text-(--wheat) italic'>Greener</span> <br /> Tomorrow
                    </motion.h1>

                    <motion.p
                    initial={{opacity:0, y:30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay:0.3}}
                    className='text-lg text-[#afb1b4] mb-9 max-w-lg'>
                        We combine cutting-edge technology with time-honored farming practices to deliver sustainable, high-yield agricultural solutions for the modern world.
                    </motion.p>

                    <motion.div 
                    initial={{opacity:0, y:30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay:0.45}}
                    className='flex gap-4'>
                        <a href="#service" className='inline-flex items-center  bg-(--accent) rounded-full text-green-900 font-bold btn border-0'>Explore Service</a>
                        <a href="#about" className='inline-flex items-center rounded-full text-white font-bold btn btn-outline'>Learn More</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
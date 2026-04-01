import React from 'react';
import heroFarm from '../../assets/hero-farm.jpg';
import { motion } from "framer-motion";

const stats = [
            { value: "25+", label: "Years Experience" },
            { value: "12K", label: "Acres Managed" },
            { value: "98%", label: "Client Retention" },
            { value: "150+", label: "Farm Partners" },
          ]

const StatsBar = () => {


    return (
        <section className=' bg-cover bg-center' 
        style={{
                 backgroundImage: `url(${heroFarm})`
                }} >
        <div>
            <div className='mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 backdrop-blur-md bg-green-950/60'
            loading="lazy"
            >
                {
                    stats.map((stat, index) => (
                        <motion.div key={stat.label}
                        initial={{ opacity: 0, x: 40 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8 }}
                         className='text-center'>
                            <p className='font1 font-bold text-3xl text-(--wheat)'>{stat.value}</p>
                            <p className='text-sm font-light uppercase tracking-wider text-gray-300'>{stat.label}</p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
        </section>
    );
};

export default StatsBar;
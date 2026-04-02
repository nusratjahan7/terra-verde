import React from 'react';
import { motion } from "framer-motion";
import { Sprout, Droplets, Sun, BarChart3, Leaf, Tractor } from "lucide-react";

const services = [
  {
    icon: Sprout,
    title: "Crop Management",
    description: "Comprehensive crop planning, rotation strategies, and yield optimization for maximum productivity.",
  },
  {
    icon: Droplets,
    title: "Smart Irrigation",
    description: "IoT-enabled irrigation systems that reduce water usage by up to 40% while improving crop health.",
  },
  {
    icon: Sun,
    title: "Climate Analysis",
    description: "Advanced weather modeling and climate risk assessments to protect your investments year-round.",
  },
  {
    icon: BarChart3,
    title: "Yield Analytics",
    description: "Data-driven insights and predictive analytics to forecast and maximize harvest outcomes.",
  },
  {
    icon: Leaf,
    title: "Soil Health",
    description: "Regenerative soil management programs that restore fertility and build long-term resilience.",
  },
  {
    icon: Tractor,
    title: "Farm Automation",
    description: "End-to-end mechanization solutions from autonomous equipment to drone-based monitoring.",
  },
];

const ServiceSection = () => {
    return (
        <section id='services' className='py-24 md:py-32 bg-[#d2cfc921] '>
            <div className='w-11/12 mx-auto'>
                <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 1.1}}
                className='text-center mx-auto mb-16 space-y-3'>
                    <p className='text-sm text-(--green) uppercase tracking-wider'>Our Service</p>
                    <h2 className='text-4xl leading-15 md:text-5xl font-bold text-gray-800 font1'>Comprehensive <span className='italic text-(--green)'>Agricultural</span> <br /> Solutions</h2>
                    <p className='text-md text-(--text2) leading-7'>From seed to harvest, we provide end-to-end services designed to maximize yield while minimizing environmental impact.</p>
                </motion.div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        services.map((service, i) => (
                            <motion.div
                            key={service.title}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 1.1, delay: i * 0.1}}
                            className='bg-(--bg-main) rounded-2xl p-8 border border-[#5d5f6325] hover:border-[#5d5f637c] hover:shadow-xl space-y-3'
                            >
                                <div className='w-14 h-14 rounded-xl bg-[#2f6b4f33] flex items-center justify-center hover:bg-[#2f6b4f50]'>
                                    <service.icon className='w-7 h-7 text-(--green)'/>
                                </div>
                                <h2 className='text-gray-800 text-xl font-semibold font1 '>{service.title}</h2>
                                <p className='text-(--text2) leading-relaxed text-sm'>{service.description}</p>

                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
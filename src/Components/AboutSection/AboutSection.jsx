import React from 'react';
import { motion } from "framer-motion";
import soil from '../../assets/soil-seedling.jpg';

const AboutSection = () => {
    return (
        <section id='about' className='w-11/12 mx-auto py-10'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
                    {/* Image */}
                    <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1 }}
                    
                    >
                        <div className='shadow-2xl'>
                            <img src={soil} alt="Hands holding soil with a growing seedling" className='h-100 object-cover w-full rounded-2xl' />
                        </div>
                    </motion.div>
                    {/* Content */}
                    <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1 }}
                    className='space-y-4'
                    >
                        <p className='text-sm text-gray-600 uppercase tracking-wider'>About TerraVerde</p>
                        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 font1'>Rooted in Tradition,<span className='italic text-(--green)'> Driven by Innovation</span></h1>
                        <p className='text-md text-(--text2) leading-7'>For over two decades, TerraVerde has been at the forefront of sustainable agriculture. We believe in nurturing the earth while feeding the future—using precision farming, regenerative practices, and advanced crop science.</p>
                        <p className='text-md text-(--text2) leading-7'>Our team of agronomists, soil scientists, and technology experts work together to transform how food is grown, ensuring healthier harvests and a healthier planet.</p>
                        <div className='grid grid-cols-2 gap-6'>
                            {
                                [
                                { title: "Organic Certified", desc: "100% natural practices" },
                                { title: "Carbon Neutral", desc: "Net-zero operations" },
                                { title: "AI-Powered", desc: "Smart crop monitoring" },
                                { title: "Fair Trade", desc: "Ethical supply chains" }
                                ].map(item => (
                                    <div key={item.title} className='border-l-3 border-(--accent) pl-4'>
                                        <p className='text-gray-800 font-semibold text-sm'>{item.title}</p>
                                        <p className='text-sm text-gray-500 mt-0.5'>{item.desc}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
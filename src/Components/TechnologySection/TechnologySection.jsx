import React from 'react';
import { motion } from "framer-motion";
import modernFarm from '../../assets/modern-farm.jpg';
import wheatField from '../../assets/wheat-field.jpg';

const TechnologySection = () => {
    return (
        <section id='technology' className='py-24 md:py-32 bg-(--green) '>
            <div className='w-11/12 mx-auto'>
                <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 1.1}}
                className='text-center mx-auto mb-16 space-y-3'>
                    <p className='text-sm text-(--wheat) uppercase tracking-wider'>Our Technology</p>
                    <h2 className='text-4xl leading-11 md:text-5xl font-bold text-(--bg-main) font1'>Where <span className='italic text-(--wheat)'>Nature</span> Meets Innovation</h2>
                    <p className='text-md text-gray-300 leading-7'>We leverage AI, IoT sensors, and satellite imagery to make farming smarter, more efficient, and truly sustainable.</p>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='rounded-2xl overflow-hidden relative group'
                >
                    <img src={modernFarm} alt='Modern farm with smart technology and greenhouses' className='w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700'  />
                    <div className='absolute inset-0 bg-linear-to-t from-(--green)/90 to-transparent flex items-end p-8'>
                        <div>
                            <h3 className='font1 text-2xl font-bold text-(--wheat)'>Precision Farming</h3>
                            <p className='text-sm text-gray-200'>Drone surveillance and AI analytics for real-time crop health monitoring.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className='rounded-2xl overflow-hidden relative group'
                >
                    <img src={wheatField} alt='Modern farm with smart technology and greenhouses' className='w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700'  />
                    <div className='absolute inset-0 bg-linear-to-t from-(--green)/80 to-transparent flex items-end p-8'>
                        <div>
                            <h3 className='font1 text-2xl font-bold text-(--wheat)'>Harvest Intelligence</h3>
                            <p className='text-sm text-gray-200'>Predictive models that determine optimal harvest timing for peak quality.</p>
                        </div>
                    </div>
                </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
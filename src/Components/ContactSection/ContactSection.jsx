import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import React from 'react';

const contactInfos = [
    { icon: MapPin, text: "1250 Harvest Lane, Greenfield, CA 93927" },
    { icon: Phone, text: "+1 (555) 234-5678" },
    { icon: Mail, text: "hello@terraverde.ag" },
]

const ContactSection = () => {
    return (
         <section id='contact' className='w-11/12 mx-auto py-10'>
            <div className='w-11/12 mx-auto px-6'>
                <div className='grid md:grid-cols-2 gap-16'>
                     <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className='space-y-4'
                    >
                        <p className='text-sm text-gray-600 uppercase tracking-wider'>Get In Touch</p>
                        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 font1'>Let's Grow<span className='italic text-(--green)'>Together</span></h1>
                        <p className='text-md text-(--text2) leading-7'>Whether you're a smallholder or a large-scale operation, we'd love to discuss how TerraVerde can transform your agricultural practice.</p>
                       
                       <div className="space-y-6 mt-9">
                            {
                                contactInfos.map(item => (
                                    <div key={item.text} className="flex items-center gap-4">
                                        <div className='w-12 h-12 rounded-xl bg-[#2f6b4f33] flex items-center justify-center hover:bg-[#2f6b4f50]'>
                                    <item.icon className='w-7 h-7 text-(--green)'/>
                                    </div>
                                    <p className="text-sm text-(--text)">{item.text}</p>
                                    </div>
                                ))
                            }
                       </div>

                        </motion.div>

                        <motion.form 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                        className="bg-[#d2cfc921] rounded-2xl p-8 md:p-10 border border-[#5d5f6325] space-y-6"
                        >
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="font-medium text-sm text-gray-800 mb-2 block"> First Name</label>
                                    <input type="text"
                                    className="text-sm w-full px-4 py-3 rounded-xl bg-(--bg-main) text-gray-900  border border-[#5d5f6325] focus:outline-none focus:ring-2 focus:ring-(--green)/30"
                                    placeholder="Nusrat" />
                                </div>
                                <div>
                                    <label className="font-medium text-sm text-gray-800 mb-2 block"> Last Name</label>
                                    <input type="text"
                                    className="text-sm w-full px-4 py-3 rounded-xl bg-(--bg-main) text-gray-900  border border-[#5d5f6325] focus:outline-none focus:ring-2 focus:ring-(--green)/30"
                                    placeholder="Jahan" />
                                </div>
                            </div>
                             <div>
                                    <label className="font-medium text-sm text-gray-800 mb-2 block">Email</label>
                                    <input type="email"
                                    className="text-sm w-full px-4 py-3 rounded-xl bg-(--bg-main) text-gray-900  border border-[#5d5f6325] focus:outline-none focus:ring-2 focus:ring-(--green)/30"
                                    placeholder="nusrat@example.com" />
                                </div>
                                 <div>
                                    <label className="font-medium text-sm text-gray-800 mb-2 block"> Last Name</label>
                                    <textarea rows={4}
                                    className="text-sm w-full px-4 py-3 rounded-xl bg-(--bg-main) text-gray-900  border border-[#5d5f6325] focus:outline-none focus:ring-2 focus:ring-(--green)/30"
                                    placeholder="Tell us about your farming needs..." />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-(--green) font-body text-sm font-semibold rounded-full hover:bg-(--green)/90 transition-colors"
                                >
                                    Send Message
                                </button>
                        </motion.form>
                </div>
            </div>
         </section>
    );
};

export default ContactSection;
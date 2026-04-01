import React from 'react';
import heroFarm from '../../assets/hero-farm.jpg';

const stats = [
            { value: "25+", label: "Years Experience" },
            { value: "12K", label: "Acres Managed" },
            { value: "98%", label: "Client Retention" },
            { value: "150+", label: "Farm Partners" },
          ]

const StatsBar = () => {


    return (
        <section className=' bg-cover absolute left-0 right-0 bg-center' 
        style={{
                 backgroundImage: `url(${heroFarm})`}} >
        <div
        >
            <div className="absolute inset-0 bg-green-950/70"></div>
            <div className='mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 backdrop-blur-md'
            loading="lazy"
            >
                {
                    stats.map((stat, index) => (
                        <div key={stat.label}
                         className='text-center'>
                            <p className='font1 font-bold text-3xl text-(--wheat)'>{stat.value}</p>
                            <p className='text-sm font-light uppercase tracking-wider text-gray-300'>{stat.label}</p>
                        </div>
                    ))
                }
            </div>
        </div>
        </section>
    );
};

export default StatsBar;
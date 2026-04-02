import React from 'react';

const Footer = () => {
    return (
        <div className="relative bg-(--green) py-10 flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-10">
        <div className="grid text-center sm:text-left sm:grid-cols-2 md:grid-cols-12 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6 justify-center sm:justify-normal">
             <div className='nav-logo text-4xl font-bold flex items-center gap-2 '>
                <h1 className='font1'>Terra<span className='text-(--wheat)'>Verde</span></h1>
            </div>
            
            </div>

            <p className="text-gray-300 text-sm md:text-md max-w-md">
              Sustainable agriculture for a thriving world. Growing better, together.
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className=" font-semibold mb-6 text-(--wheat) text-md md:text-lg">Company</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition text-sm md:text-md">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition text-sm md:text-md">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition text-sm md:text-md">
                 Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition text-sm md:text-md ">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className=" font-semibold mb-6 text-(--wheat) text-md md:text-lg">Services</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition text-sm md:text-md">
                  Crop Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition text-sm md:text-md">
                  Smart Irrigation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition text-sm md:text-md">
                  Soil Health
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition text-sm md:text-md">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className=" font-semibold mb-6 text-(--wheat) text-md md:text-lg">Resources</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition text-sm md:text-md">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition text-sm md:text-md">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition text-sm md:text-md">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition text-sm md:text-md">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-400 flex flex-col md:flex-row items-center justify-between gap-4 ">
          <div className='text-gray-300  text-sm md:text-md'>© {new Date().getFullYear()} TerraVerde. All rights reserved.</div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition text-sm md:text-md text-gray-300">
              Privacy Policy ● Terms of Service ● Cookies
            </a>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Footer;
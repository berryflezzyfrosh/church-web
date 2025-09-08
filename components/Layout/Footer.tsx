import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaHeart } from 'react-icons/fa'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Pastor', href: '#pastor' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
    { name: 'Give Online', href: '#give' }
  ]

  const services = [
    { name: 'Sunday Celebration', time: '8:30AM - 11:00AM WAT' },
    { name: 'Moment Of Encounter', time: 'Wed 9:30AM - 12:00PM WAT' },
    { name: 'Prophetic & Deliverance', time: 'Sat 9:30AM - 12:00PM WAT' },
    { name: 'Bible Study', time: 'Thu 5:00PM - 6:00PM WAT' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Ministry Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">GL</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">God's Light Ministry</h3>
                <p className="text-sm text-primary-400">Replacing Darkness With Light</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              For over 12 years, we have been transforming lives and communities through 
              the power of God's word and love. Join our growing family of believers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                <FaYoutube />
              </a>
              <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-primary-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Schedule */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-primary-400">Service Schedule</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name} className="text-gray-300">
                  <div className="font-medium text-white">{service.name}</div>
                  <div className="text-sm flex items-center">
                    <FaClock className="mr-2 text-primary-400" />
                    {service.time}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-primary-400">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaPhone className="text-primary-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Phone Numbers</p>
                  <p className="text-gray-300 text-sm">+234 811 504 0087</p>
                  <p className="text-gray-300 text-sm">+234 706 051 6183</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Locations</p>
                  <p className="text-gray-300 text-sm mb-2">
                    Behind Breakthrough Academy, 2nd Transformer, Fed. Low Cost, Kwamba Suleja Niger State
                  </p>
                  <p className="text-gray-300 text-sm">
                    After Car wash Junction Gwako 2, Along Gwagwalada Express Road, Abuja
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-primary-400 mt-1" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-300 text-sm">info@godslightministry.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-300">
                © {currentYear} God's Light Int'l Power Ministry. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                "Commit Your Way Unto God's Hand" - Psalm 37:5
              </p>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>Made with</span>
              <FaHeart className="text-red-500" />
              <span>for God's Kingdom</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
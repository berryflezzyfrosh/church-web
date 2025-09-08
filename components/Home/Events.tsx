import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaArrowRight } from 'react-icons/fa'

const Events: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  const upcomingEvents = [
    {
      title: 'Night Of Mercy',
      date: 'Last Friday of Every Month',
      time: '10:30PM - 3:00AM WAT',
      location: 'Main Sanctuary',
      description: 'A powerful night of prayer, worship, and divine mercy. Experience breakthrough and supernatural encounters.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Special Service',
      attendees: '200+'
    },
    {
      title: 'Anointing Service',
      date: 'First Sunday of Every Month',
      time: '8:30AM - 11:00AM WAT',
      location: 'Main Sanctuary',
      description: 'Special anointing service for breakthrough, healing, and divine blessing. Come and receive your portion.',
      image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Monthly Service',
      attendees: '400+'
    },
    {
      title: 'Commanding The Month',
      date: 'First 3 Days of Every Month',
      time: 'Various Times',
      location: 'Both Locations',
      description: 'Prophetic declarations and prayers to command blessings and breakthrough for the new month.',
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Prayer Program',
      attendees: '300+'
    },
    {
      title: 'Youth Conference 2024',
      date: 'December 15-17, 2024',
      time: '6:00PM - 9:00PM WAT',
      location: 'Main Sanctuary',
      description: 'Annual youth conference with powerful teachings, worship, and fellowship for young people.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Conference',
      attendees: '150+'
    },
    {
      title: 'Women\'s Fellowship',
      date: 'Every Second Saturday',
      time: '2:00PM - 5:00PM WAT',
      location: 'Fellowship Hall',
      description: 'Empowering women through God\'s word, fellowship, and mutual support in faith and life.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Fellowship',
      attendees: '80+'
    },
    {
      title: 'Children\'s Crusade',
      date: 'December 22, 2024',
      time: '10:00AM - 2:00PM WAT',
      location: 'Church Grounds',
      description: 'Special children\'s program with games, teachings, gifts, and fun activities for kids.',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Children\'s Event',
      attendees: '100+'
    }
  ]

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Upcoming Events
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us for special events, conferences, and programs designed to strengthen your faith and fellowship
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
            >
              {/* Event Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                  <FaUsers />
                  <span>{event.attendees}</span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-800 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaCalendarAlt className="mr-2 text-primary-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaClock className="mr-2 text-primary-600" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <FaMapMarkerAlt className="mr-2 text-primary-600" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{ height: selectedEvent === index ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Event Highlights</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Powerful worship and praise</li>
                      <li>• Inspiring messages from God's word</li>
                      <li>• Fellowship and networking</li>
                      <li>• Prayer and ministry time</li>
                      <li>• Refreshments provided</li>
                    </ul>
                  </div>
                </motion.div>

                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2 mt-4">
                  <span>Register Now</span>
                  <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event Calendar CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-12 rounded-2xl shadow-2xl">
            <h3 className="font-heading text-3xl font-bold mb-4">
              Never Miss an Event
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our calendar and get notified about all upcoming events and services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Subscribe to Calendar
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors duration-300">
                Download App
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Events
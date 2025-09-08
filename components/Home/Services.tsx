import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaClock, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaPray, FaBook, FaMoon } from 'react-icons/fa'

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const regularServices = [
    {
      name: 'Sunday Celebration',
      day: 'Sunday',
      time: '8:30AM - 11:00AM WAT',
      description: 'Join us for powerful worship, inspiring messages, and fellowship',
      icon: FaPray,
      color: 'from-primary-500 to-primary-600'
    },
    {
      name: 'Moment Of Encounter',
      day: 'Wednesday',
      time: '9:30AM - 12:00PM WAT',
      description: 'Experience divine encounters and breakthrough in your life',
      icon: FaUsers,
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      name: 'Prophetic & Deliverance Hour',
      day: 'Saturday',
      time: '9:30AM - 12:00PM WAT',
      description: 'Receive prophetic words and experience God\'s delivering power',
      icon: FaPray,
      color: 'from-accent-500 to-accent-600'
    },
    {
      name: 'Bible Study',
      day: 'Thursday',
      time: '5:00PM - 6:00PM WAT',
      description: 'Deep dive into God\'s word for spiritual growth and understanding',
      icon: FaBook,
      color: 'from-green-500 to-green-600'
    }
  ]

  const specialServices = [
    {
      name: 'Night Of Mercy',
      schedule: 'Last Friday Monthly',
      time: '10:30PM - 3:00AM WAT',
      description: 'A powerful night of prayer, worship, and divine mercy',
      icon: FaMoon,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Anointing Service',
      schedule: 'First Sunday Monthly',
      time: '8:30AM - 11:00AM WAT',
      description: 'Special anointing service for breakthrough and blessing',
      icon: FaPray,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Commanding The Month',
      schedule: 'First 3 Days Monthly',
      time: 'Various Times',
      description: 'Prophetic declarations and prayers for the new month',
      icon: FaCalendarAlt,
      color: 'from-red-500 to-red-600'
    }
  ]

  const getNextServiceCountdown = () => {
    const now = new Date()
    const currentDay = now.getDay()
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()

    // Find next service
    const services = [
      { day: 0, hour: 8, minute: 30, name: 'Sunday Celebration' },
      { day: 3, hour: 9, minute: 30, name: 'Moment Of Encounter' },
      { day: 4, hour: 17, minute: 0, name: 'Bible Study' },
      { day: 6, hour: 9, minute: 30, name: 'Prophetic & Deliverance Hour' },
    ]

    for (const service of services) {
      const serviceDate = new Date()
      serviceDate.setDate(serviceDate.getDate() + (service.day - currentDay + 7) % 7)
      serviceDate.setHours(service.hour, service.minute, 0, 0)

      if (serviceDate > now) {
        const timeDiff = serviceDate.getTime() - now.getTime()
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))

        return {
          name: service.name,
          days,
          hours,
          minutes
        }
      }
    }

    return null
  }

  const nextService = getNextServiceCountdown()

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Service Schedule
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us for life-transforming services filled with worship, prayer, and the Word of God
          </p>
        </motion.div>

        {/* Next Service Countdown */}
        {nextService && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 rounded-2xl shadow-2xl mb-16 text-center"
          >
            <h3 className="font-heading text-2xl font-bold mb-4">Next Service</h3>
            <p className="text-xl mb-6">{nextService.name}</p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">{nextService.days}</div>
                <div className="text-sm opacity-80">Days</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{nextService.hours}</div>
                <div className="text-sm opacity-80">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{nextService.minutes}</div>
                <div className="text-sm opacity-80">Minutes</div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Services */}
        <div className="mb-16">
          <h3 className="font-heading text-3xl font-bold text-gray-800 mb-8 text-center">
            Regular Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <service.icon className="text-3xl mb-4" />
                  <h4 className="font-semibold text-lg mb-2">{service.name}</h4>
                  <p className="text-sm opacity-90">{service.day}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4 text-gray-600">
                    <FaClock className="mr-2" />
                    <span className="font-medium">{service.time}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Special Services */}
        <div>
          <h3 className="font-heading text-3xl font-bold text-gray-800 mb-8 text-center">
            Special Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {specialServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white text-center`}>
                  <service.icon className="text-4xl mb-4 mx-auto" />
                  <h4 className="font-semibold text-xl mb-2">{service.name}</h4>
                  <p className="text-sm opacity-90">{service.schedule}</p>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center mb-4 text-gray-600">
                    <FaClock className="mr-2" />
                    <span className="font-medium">{service.time}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="font-heading text-2xl font-bold text-gray-800 mb-6 text-center">
            Service Locations
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Primary Location</h4>
              <p className="text-gray-600">
                Behind Breakthrough Academy, 2nd Transformer, Fed. Low Cost, Kwamba Suleja Niger State
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-2">Secondary Location</h4>
              <p className="text-gray-600">
                After Car wash Junction Gwako 2, Along Gwagwalada Express Road, Abuja
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
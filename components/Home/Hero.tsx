import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaCalendarAlt, FaClock } from 'react-icons/fa'

const Hero: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [nextService, setNextService] = useState<string>('')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const getNextService = () => {
      const now = new Date()
      const currentDay = now.getDay()
      const currentHour = now.getHours()
      const currentMinute = now.getMinutes()

      // Service schedule
      const services = [
        { day: 0, hour: 8, minute: 30, name: 'Sunday Celebration' }, // Sunday
        { day: 3, hour: 9, minute: 30, name: 'Moment Of Encounter' }, // Wednesday
        { day: 4, hour: 17, minute: 0, name: 'Bible Study' }, // Thursday
        { day: 6, hour: 9, minute: 30, name: 'Prophetic & Deliverance Hour' }, // Saturday
      ]

      for (const service of services) {
        if (currentDay < service.day || 
            (currentDay === service.day && 
             (currentHour < service.hour || 
              (currentHour === service.hour && currentMinute < service.minute)))) {
          setNextService(service.name)
          return
        }
      }

      // If no service today, next is Sunday
      setNextService('Sunday Celebration')
    }

    getNextService()
  }, [currentTime])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
          }}
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-primary-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-secondary-400 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Ministry Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            God's Light Int'l
            <span className="block text-primary-400">Power Ministry</span>
          </motion.h1>

          {/* Alternative Name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl font-light mb-2 text-gray-200"
          >
            A.K.A Light Of God Ministry
          </motion.p>

          {/* Motto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-6 inline-block"
          >
            <p className="text-lg md:text-xl font-medium text-primary-200">
              "Replacing Darkness With Light"
            </p>
          </motion.div>

          {/* Theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-8"
          >
            <h2 className="font-script text-2xl md:text-3xl text-primary-300 mb-2">
              My Year Of All Round Sweetness
            </h2>
            <p className="text-sm md:text-base text-gray-300 italic">
              "Commit Your Way Unto God's Hand" - Psalm 37:5
            </p>
          </motion.div>

          {/* Next Service Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="bg-white/15 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto"
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <FaCalendarAlt className="text-primary-300" />
              <span className="font-medium">Next Service</span>
            </div>
            <p className="text-lg font-semibold text-primary-200 mb-1">{nextService}</p>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-300">
              <FaClock />
              <span>{currentTime.toLocaleTimeString('en-US', { 
                timeZone: 'Africa/Lagos',
                hour12: true,
                hour: '2-digit',
                minute: '2-digit'
              })} WAT</span>
            </div>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join Our Service
            </button>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <FaPlay />
              <span>Watch Live</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
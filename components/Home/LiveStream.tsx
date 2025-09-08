import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ReactPlayer from 'react-player'
import { FaPlay, FaUsers, FaCalendarAlt, FaClock, FaYoutube, FaFacebook } from 'react-icons/fa'

const LiveStream: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [isLive, setIsLive] = useState(false)
  const [viewerCount, setViewerCount] = useState(0)
  const [currentService, setCurrentService] = useState('')

  useEffect(() => {
    // Check if there's a live service
    const checkLiveStatus = () => {
      const now = new Date()
      const currentDay = now.getDay()
      const currentHour = now.getHours()
      const currentMinute = now.getMinutes()
      const currentTime = currentHour * 60 + currentMinute

      // Service times in minutes from midnight
      const services = [
        { day: 0, start: 8 * 60 + 30, end: 11 * 60, name: 'Sunday Celebration' },
        { day: 3, start: 9 * 60 + 30, end: 12 * 60, name: 'Moment Of Encounter' },
        { day: 4, start: 17 * 60, end: 18 * 60, name: 'Bible Study' },
        { day: 6, start: 9 * 60 + 30, end: 12 * 60, name: 'Prophetic & Deliverance Hour' },
      ]

      const currentServiceData = services.find(service => 
        service.day === currentDay && 
        currentTime >= service.start && 
        currentTime <= service.end
      )

      if (currentServiceData) {
        setIsLive(true)
        setCurrentService(currentServiceData.name)
        setViewerCount(Math.floor(Math.random() * 500) + 100) // Mock viewer count
      } else {
        setIsLive(false)
        setCurrentService('')
        setViewerCount(0)
      }
    }

    checkLiveStatus()
    const interval = setInterval(checkLiveStatus, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  const upcomingStreams = [
    {
      name: 'Sunday Celebration',
      date: 'This Sunday',
      time: '8:30AM WAT',
      description: 'Join us for worship and the Word'
    },
    {
      name: 'Moment Of Encounter',
      date: 'Wednesday',
      time: '9:30AM WAT',
      description: 'Experience divine encounters'
    },
    {
      name: 'Prophetic Hour',
      date: 'Saturday',
      time: '9:30AM WAT',
      description: 'Prophetic ministry and deliverance'
    }
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Live Streaming
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Can't make it to church? Join us online for live services and experience God's presence from anywhere
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Stream Player */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              {isLive ? (
                <div className="relative">
                  {/* Live Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>LIVE</span>
                  </div>
                  
                  {/* Viewer Count */}
                  <div className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm flex items-center space-x-2">
                    <FaUsers />
                    <span>{viewerCount} watching</span>
                  </div>

                  {/* Video Player */}
                  <div className="aspect-video">
                    <ReactPlayer
                      url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual live stream URL
                      width="100%"
                      height="100%"
                      playing={true}
                      controls={true}
                      light={false}
                    />
                  </div>
                  
                  {/* Live Service Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{currentService}</h3>
                    <p className="text-gray-300">Currently streaming live from God's Light Ministry</p>
                  </div>
                </div>
              ) : (
                <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaPlay className="text-white text-2xl ml-1" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">No Live Stream</h3>
                    <p className="text-gray-300 mb-6">
                      We're not currently live, but join us for our next service!
                    </p>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                      Set Reminder
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Upcoming Streams & Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <h3 className="font-semibold text-xl text-white mb-6">Upcoming Streams</h3>
              <div className="space-y-4">
                {upcomingStreams.map((stream, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-white">{stream.name}</h4>
                      <span className="text-primary-400 text-sm font-medium">{stream.date}</span>
                    </div>
                    <div className="flex items-center text-gray-300 text-sm mb-2">
                      <FaClock className="mr-2" />
                      <span>{stream.time}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{stream.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gray-800 rounded-xl p-6"
            >
              <h3 className="font-semibold text-xl text-white mb-6">Watch on Social Media</h3>
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center space-x-4 bg-red-600 hover:bg-red-700 rounded-lg p-4 transition-colors duration-200"
                >
                  <FaYoutube className="text-2xl" />
                  <div>
                    <p className="font-medium">YouTube Live</p>
                    <p className="text-sm opacity-80">Subscribe for notifications</p>
                  </div>
                </a>
                <a 
                  href="#" 
                  className="flex items-center space-x-4 bg-blue-600 hover:bg-blue-700 rounded-lg p-4 transition-colors duration-200"
                >
                  <FaFacebook className="text-2xl" />
                  <div>
                    <p className="font-medium">Facebook Live</p>
                    <p className="text-sm opacity-80">Follow our page</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Stream Quality Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-6"
            >
              <h3 className="font-semibold text-lg text-white mb-4">Stream Features</h3>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>HD Quality Video</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Crystal Clear Audio</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Interactive Chat</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Mobile Friendly</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveStream
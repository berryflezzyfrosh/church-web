import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuoteLeft, FaHeart, FaPray, FaUsers } from 'react-icons/fa'

const Pastor: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const achievements = [
    {
      icon: FaUsers,
      title: 'Ministry Leadership',
      description: 'Leading over 600+ members across 4+ branches with wisdom and grace'
    },
    {
      icon: FaPray,
      title: 'Prophetic Ministry',
      description: 'Powerful prophetic and deliverance ministry touching lives globally'
    },
    {
      icon: FaHeart,
      title: 'Community Impact',
      description: 'Transforming communities through love, compassion, and divine intervention'
    }
  ]

  return (
    <section id="pastor" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Spiritual Leader
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet our beloved Pastor, a woman of God with a heart for souls and a passion for ministry
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Pastor Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616c9c0e8d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Prophetess Margareth Egbodor"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Quote */}
            <div className="absolute -bottom-8 -right-8 bg-primary-600 text-white p-6 rounded-xl shadow-xl max-w-xs">
              <FaQuoteLeft className="text-2xl mb-3 opacity-50" />
              <p className="text-sm italic">
                "God has called me to replace darkness with light in every life I encounter"
              </p>
            </div>
          </motion.div>

          {/* Pastor Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-3xl font-bold text-gray-800 mb-2">
                Prophetess Margareth Egbodor
              </h3>
              <p className="text-xl text-primary-600 font-semibold mb-4">
                President & Founder
              </p>
              <div className="w-16 h-1 bg-primary-600 mb-6"></div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="font-semibold text-lg text-gray-800 mb-3">Ministry Calling</h4>
              <p className="text-gray-600 leading-relaxed">
                Called by God to establish a ministry that would serve as a beacon of hope 
                and transformation, Prophetess Margareth Egbodor founded God's Light Int'l 
                Power Ministry with a divine mandate to replace darkness with light in every 
                aspect of human existence.
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-xl border-l-4 border-primary-600">
              <h4 className="font-semibold text-lg text-gray-800 mb-3">Vision & Heart</h4>
              <p className="text-gray-600 leading-relaxed">
                With over 12 years of dedicated ministry, she has touched countless lives 
                through prophetic ministry, deliverance, and pastoral care. Her heart burns 
                with passion for souls and her vision extends beyond borders to impact nations.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-800">Ministry Achievements</h4>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="text-white text-lg" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-1">{achievement.title}</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Pastor */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-3">Connect with Our Pastor</h4>
              <p className="mb-4 opacity-90">
                Need prayer, counseling, or spiritual guidance? Our pastor is available to minister to you.
              </p>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                Request Prayer
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pastor
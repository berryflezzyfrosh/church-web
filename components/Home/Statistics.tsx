import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { FaUsers, FaChild, FaUserGraduate, FaYoungster, FaChurch, FaCalendarAlt } from 'react-icons/fa'

const Statistics: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    {
      icon: FaUsers,
      number: 600,
      label: 'Total Members',
      description: 'Growing family of believers',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaChild,
      number: 50,
      label: 'Children',
      description: 'Young hearts for Jesus',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaUserGraduate,
      number: 62,
      label: 'Teenagers',
      description: 'Future leaders in training',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaYoungster,
      number: 20,
      label: 'Youth',
      description: 'Passionate young adults',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: FaChurch,
      number: 4,
      label: 'Branches',
      description: 'Expanding God\'s kingdom',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: FaCalendarAlt,
      number: 12,
      label: 'Years',
      description: 'Of faithful ministry',
      color: 'from-yellow-500 to-yellow-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Ministry Impact
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            See how God has blessed our ministry and the lives we've touched over the years
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="text-2xl text-white" />
              </div>
              
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {inView ? (
                  <CountUp
                    end={stat.number}
                    duration={2}
                    delay={0.5 + index * 0.1}
                    suffix="+"
                  />
                ) : (
                  '0+'
                )}
              </div>
              
              <h4 className="font-semibold text-lg text-white mb-2">{stat.label}</h4>
              <p className="text-sm text-white/80 leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Growing in Faith Together
            </h3>
            <p className="text-white/90 leading-relaxed mb-6">
              Our ministry continues to grow as we impact lives across Nigeria and beyond. 
              Each number represents a life touched by God's love and a testimony of His faithfulness.
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Join Our Family
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Statistics
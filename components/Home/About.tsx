import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaHeart, FaPray, FaUsers, FaGlobe } from 'react-icons/fa'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: FaHeart,
      title: 'Love & Compassion',
      description: 'We spread God\'s love through acts of kindness and compassion to all people.'
    },
    {
      icon: FaPray,
      title: 'Prayer & Worship',
      description: 'Our foundation is built on fervent prayer and heartfelt worship to the Almighty.'
    },
    {
      icon: FaUsers,
      title: 'Community',
      description: 'Building a strong community of believers who support and encourage one another.'
    },
    {
      icon: FaGlobe,
      title: 'Global Impact',
      description: 'Reaching souls across nations with the transformative power of God\'s light.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About Our Ministry
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 12 years, God's Light Int'l Power Ministry has been a beacon of hope, 
            transforming lives and communities through the power of God's word and love.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-heading text-3xl font-bold text-gray-800 mb-6">
              Our Mission & Vision
            </h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-600">
                <h4 className="font-semibold text-xl text-gray-800 mb-3">Our Mission</h4>
                <p className="text-gray-600 leading-relaxed">
                  To replace darkness with light in every aspect of human life through the 
                  transformative power of God's word, prayer, and divine intervention. We are 
                  committed to raising disciples who will impact their generation positively.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-secondary-600">
                <h4 className="font-semibold text-xl text-gray-800 mb-3">Our Vision</h4>
                <p className="text-gray-600 leading-relaxed">
                  To establish a global ministry that brings hope, healing, and restoration 
                  to broken lives, families, and communities. We envision a world where 
                  God's light shines in every dark corner, bringing salvation and transformation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Church Community"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-semibold">Building Lives, Transforming Communities</p>
                <p className="text-sm opacity-90">Since 2012</p>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold">12+</p>
                <p className="text-sm">Years of Ministry</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary-600 text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold">600+</p>
                <p className="text-sm">Members</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-2xl text-white" />
              </div>
              <h4 className="font-semibold text-xl text-gray-800 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-12 rounded-2xl shadow-2xl">
            <h3 className="font-heading text-3xl font-bold mb-4">
              Join Our Growing Family
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Experience the transformative power of God's love in a welcoming community
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Become a Member
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
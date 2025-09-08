import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Sister Grace Adebayo',
      role: 'Church Member',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      content: 'God\'s Light Ministry has been a blessing to my family. The prophetic ministry here is powerful and accurate. I\'ve experienced breakthrough in my finances and health through the prayers and ministry of our Pastor.',
      rating: 5,
      location: 'Abuja'
    },
    {
      name: 'Brother John Okafor',
      role: 'Youth Leader',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      content: 'The youth ministry here has shaped my life tremendously. The teachings are practical and life-changing. I\'ve grown spiritually and found my purpose through this ministry.',
      rating: 5,
      location: 'Suleja'
    },
    {
      name: 'Mrs. Blessing Okoro',
      role: 'Women\'s Fellowship Leader',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      content: 'Prophetess Margareth is a true woman of God. Her ministry has brought healing to my marriage and restoration to my family. The love and care in this church is genuine.',
      rating: 5,
      location: 'Niger State'
    },
    {
      name: 'Pastor David Uche',
      role: 'Associate Pastor',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      content: 'Working alongside Prophetess Margareth has been a privilege. Her dedication to the gospel and passion for souls is inspiring. This ministry truly replaces darkness with light.',
      rating: 5,
      location: 'Abuja'
    },
    {
      name: 'Sister Mary Adamu',
      role: 'Choir Member',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      content: 'The worship experience here is heavenly. I\'ve found my calling in music ministry and have grown tremendously in my spiritual walk. This church feels like home.',
      rating: 5,
      location: 'Gwagwalada'
    },
    {
      name: 'Brother Emmanuel Sani',
      role: 'Men\'s Fellowship',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      content: 'The men\'s fellowship has helped me become a better husband and father. The biblical teachings on leadership and family have transformed my household completely.',
      rating: 5,
      location: 'Suleja'
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our members about how God has transformed their lives through this ministry
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                {/* Image */}
                <div className="relative">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{testimonials[currentTestimonial].location}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-center">
                  <FaQuoteLeft className="text-4xl text-primary-600 mb-6" />
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mr-1" />
                    ))}
                  </div>

                  {/* Author */}
                  <div>
                    <h4 className="font-semibold text-xl text-gray-800">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-primary-600 font-medium">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <FaChevronLeft />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-primary-600">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm mr-1" />
                ))}
              </div>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                "{testimonial.content.substring(0, 120)}..."
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-bold text-gray-800 mb-4">
              Share Your Testimony
            </h3>
            <p className="text-gray-600 mb-6">
              Has God done something amazing in your life through this ministry? We'd love to hear your story!
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              Submit Testimony
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaPaperPlane } from 'react-icons/fa'
import { toast } from 'react-toastify'
import emailjs from 'emailjs-com'

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    requestType: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace with your EmailJS service details
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          request_type: formData.requestType,
          to_email: 'info@godslightministry.org'
        },
        'YOUR_PUBLIC_KEY'
      )

      toast.success('Message sent successfully! We\'ll get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        requestType: 'general'
      })
    } catch (error) {
      toast.error('Failed to send message. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone Numbers',
      details: ['+234 811 504 0087', '+234 706 051 6183'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Locations',
      details: [
        'Behind Breakthrough Academy, 2nd Transformer, Fed. Low Cost, Kwamba Suleja Niger State',
        'After Car wash Junction Gwako 2, Along Gwagwalada Express Road, Abuja'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@godslightministry.org', 'pastor@godslightministry.org'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FaClock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00AM - 5:00PM WAT', 'Saturday: 9:00AM - 2:00PM WAT'],
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const socialLinks = [
    { icon: FaFacebook, name: 'Facebook', url: '#', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: FaYoutube, name: 'YouTube', url: '#', color: 'bg-red-600 hover:bg-red-700' },
    { icon: FaInstagram, name: 'Instagram', url: '#', color: 'bg-pink-600 hover:bg-pink-700' },
    { icon: FaTwitter, name: 'Twitter', url: '#', color: 'bg-blue-500 hover:bg-blue-600' }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We'd love to hear from you. Reach out for prayer requests, questions, or to learn more about our ministry
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-3xl font-bold mb-8">Contact Information</h3>
              
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="text-white text-lg" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300 mb-1 leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-xl text-white mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110`}
                    title={social.name}
                  >
                    <social.icon className="text-white text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-600 rounded-xl p-6">
              <h4 className="font-semibold text-lg text-white mb-3">Emergency Prayer Line</h4>
              <p className="text-white/90 mb-4">
                Need urgent prayer? Our prayer team is available 24/7 for emergency situations.
              </p>
              <div className="flex items-center space-x-2">
                <FaPhone className="text-white" />
                <span className="font-semibold text-white">+234 811 504 0087</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="font-heading text-3xl font-bold text-gray-800 mb-8">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-800"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-800"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-800"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Request Type</label>
                  <select
                    name="requestType"
                    value={formData.requestType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-800"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="counseling">Counseling</option>
                    <option value="membership">Membership</option>
                    <option value="partnership">Partnership</option>
                    <option value="event">Event Information</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-800"
                  placeholder="Enter message subject"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 resize-none text-gray-800"
                  placeholder="Enter your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 mb-4">
                Prefer to call? We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+2348115040087"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <FaPhone />
                  <span>+234 811 504 0087</span>
                </a>
                <a
                  href="tel:+2347060516183"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <FaPhone />
                  <span>+234 706 051 6183</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="font-heading text-3xl font-bold text-center mb-8">Find Us</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Location 1 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-4xl text-white mb-4 mx-auto" />
                  <h4 className="font-semibold text-xl text-white mb-2">Primary Location</h4>
                  <p className="text-white/90 text-sm px-4">
                    Behind Breakthrough Academy, 2nd Transformer, Fed. Low Cost, Kwamba Suleja Niger State
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg text-white mb-3">Main Sanctuary</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Our primary worship center where most services are held. Easily accessible with parking available.
                </p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
                  Get Directions
                </button>
              </div>
            </div>

            {/* Location 2 */}
            <div className="bg-gray-800 rounded-xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-secondary-600 to-accent-600 flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-4xl text-white mb-4 mx-auto" />
                  <h4 className="font-semibold text-xl text-white mb-2">Secondary Location</h4>
                  <p className="text-white/90 text-sm px-4">
                    After Car wash Junction Gwako 2, Along Gwagwalada Express Road, Abuja
                  </p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg text-white mb-3">Branch Office</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Our Abuja branch location for counseling, meetings, and special programs.
                </p>
                <button className="bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
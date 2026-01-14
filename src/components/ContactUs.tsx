  import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const ContactUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    { icon: '/images/mail_icon.png', label: 'Email', value: 'sam@bcegov.com' },
    { icon: '/images/call_icon.png', label: 'Phone', value: '(480) 770-6555' },
    { icon: '/images/address_icon.png', label: 'Address', value: '18444 N. 25th Avenue Suite 420, Phoenix, AZ 85023, USA' },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="py-10 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 xl1:py-28 xl2:py-32 bg-white"
    >
      <div className="container mx-auto px-2 xs:px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 xl1:px-12 xl2:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20"
        >
          <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl1:text-6xl xl2:text-7xl font-bold text-secondary mb-2 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-6">
            Get In Touch
          </h2>
          <p className="text-sm xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl xl1:text-xl xl2:text-2xl text-gray-600 max-w-2xl mx-auto px-2 xs:px-2 sm:px-4">
            When you choose BCE, you can look forward to a highly specialized team dedicated to you!
          </p>
        </motion.div>

        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 grid-cols-2 gap-6 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-4 sm:space-y-5 md:space-y-5 lg:space-y-6 xl:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs xs:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-medium text-secondary mb-1 xs:mb-1 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 xs:px-3 sm:px-3 md:px-4 lg:px-4 xl:px-5 py-2 xs:py-2 sm:py-2 md:py-3 lg:py-3 xl:py-4 text-sm xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent focus:outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs xs:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-medium text-secondary mb-1 xs:mb-1 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 xs:px-3 sm:px-3 md:px-4 lg:px-4 xl:px-5 py-2 xs:py-2 sm:py-2 md:py-3 lg:py-3 xl:py-4 text-sm xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs xs:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-medium text-secondary mb-1 xs:mb-1 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 xs:px-3 sm:px-3 md:px-4 lg:px-4 xl:px-5 py-2 xs:py-2 sm:py-2 md:py-3 lg:py-3 xl:py-4 text-sm xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent focus:outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs xs:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base font-medium text-secondary mb-1 xs:mb-1 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 xs:px-3 sm:px-3 md:px-4 lg:px-4 xl:px-5 py-2 xs:py-2 sm:py-2 md:py-3 lg:py-3 xl:py-4 text-sm xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent focus:outline-none resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-4 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-3 xs:py-3 sm:py-3 md:py-3 lg:py-4 xl:py-5 bg-secondary text-white text-sm xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg font-semibold rounded-lg shadow-lg hover:bg-accent transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 xs:space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-8 xl:space-y-10"
          >
            <div>
              <h3 className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl xl1:text-3xl xl2:text-3xl font-bold text-secondary mb-4 xs:mb-4 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8">
                Contact Information
              </h3>
              <div className="space-y-4 xs:space-y-4 sm:space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start space-x-3 xs:space-x-3 sm:space-x-3 md:space-x-4 lg:space-x-4 xl:space-x-5"
                  >
                    <div className="flex-shrink-0">
                      <img
                        src={info.icon}
                        alt={`${info.label} icon`}
                        className="w-5 xs:w-5 sm:w-5 md:w-6 lg:w-6 xl:w-7 h-5 xs:h-5 sm:h-5 md:h-6 lg:h-6 xl:h-7 object-contain"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-sm xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg text-secondary mb-1 xs:mb-1 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-2">
                        {info.label}
                      </div>
                      <div className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base xl1:text-lg xl2:text-lg text-gray-600">{info.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-secondary p-4 xs:p-4 sm:p-5 md:p-5 lg:p-6 xl:p-8 rounded-lg xs:rounded-lg sm:rounded-xl text-white"
            >
              <h4 className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl xl1:text-3xl xl2:text-3xl font-bold mb-3 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5">Business Hours</h4>
              <div className="space-y-2 xs:space-y-2 sm:space-y-2 md:space-y-2 lg:space-y-2 xl:space-y-3 text-gray-100 text-sm xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs


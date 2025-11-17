import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality, ensuring every project meets the highest standards.',
      icon: '⭐',
    },
    {
      title: 'Safety Commitment',
      description: 'Safety is our top priority in every aspect of our operations.',
      icon: '🛡️',
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and methods to deliver better results.',
      icon: '💡',
    },
    {
      title: 'Integrity',
      description: 'Honest, transparent communication and ethical business practices.',
      icon: '🤝',
    },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="py-8 xs:py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 xl1:py-24 xl2:py-28 bg-gray-100"
    >
      <div className="container mx-auto px-4 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 xl1:px-14 xl2:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16"
        >
          <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl1:text-6xl xl2:text-7xl font-bold text-secondary mb-3 xs:mb-3 sm:mb-4 md:mb-4 lg:mb-5 xl:mb-6">
            About Us
          </h2>
          {/* <p className="text-sm xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl xl1:text-xl xl2:text-2xl text-gray-600 max-w-3xl mx-auto">
            Building trust through excellence for over 25 years
          </p> */}
        </motion.div>

        {/* Mission and Vision Side by Side */}
        <div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 xs:gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-12 mb-10 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full"
          >
            <div className="bg-white rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-6 xs:p-6 sm:p-8 md:p-8 lg:p-10 xl:p-12 h-full flex flex-col">
              <div className="flex items-center justify-center mb-4 xs:mb-4 sm:mb-5 md:mb-5 lg:mb-6 xl:mb-8">
                <div className="text-4xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl mr-3 xs:mr-3 sm:mr-4">🎯</div>
                <h3 className="text-xl xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl xl1:text-4xl xl2:text-4xl font-bold text-secondary">
                  Our Mission
                </h3>
              </div>
              <p className="text-sm xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg xl1:text-xl xl2:text-xl text-gray-700 text-center leading-relaxed flex-grow">
                To deliver exceptional construction services that exceed client expectations through 
                unwavering commitment to quality, safety, and innovation. As a service-disabled 
                veteran-owned small business, we are dedicated to serving government and commercial 
                clients nationwide with dependable, code-compliant results that build lasting 
                relationships and strengthen communities.
              </p>
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="bg-gradient-to-br from-secondary to-accent rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-6 xs:p-6 sm:p-8 md:p-8 lg:p-10 xl:p-12 text-white h-full flex flex-col">
              <div className="flex items-center justify-center mb-4 xs:mb-4 sm:mb-5 md:mb-5 lg:mb-6 xl:mb-8">
                <div className="text-4xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl mr-3 xs:mr-3 sm:mr-4">👁️</div>
                <h3 className="text-xl xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl xl1:text-4xl xl2:text-4xl font-bold">
                  Our Vision
                </h3>
              </div>
              <p className="text-sm xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg xl1:text-xl xl2:text-xl text-white/95 text-center leading-relaxed flex-grow">
                To be the premier construction partner recognized for excellence in sitework, 
                infrastructure, vertical construction, and specialty facility services. We envision 
                a future where every project we undertake sets new standards for quality, safety, 
                and sustainability, while maintaining our core values and commitment to serving 
                those who have served our nation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-6 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-14">
            <div className="flex items-center justify-center mb-3 xs:mb-3 sm:mb-4 md:mb-4 lg:mb-5 xl:mb-6">
              <div className="text-4xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl mr-3 xs:mr-3 sm:mr-4">💎</div>
              <h3 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl xl1:text-4xl xl2:text-5xl font-bold text-secondary">
                Our Core Values
              </h3>
            </div>
            <p className="text-sm xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg xl1:text-xl xl2:text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-5 xs:p-5 sm:p-6 md:p-6 lg:p-7 xl:p-8 rounded-lg xs:rounded-lg sm:rounded-xl shadow-md hover:shadow-xl text-center transition-all duration-300"
              >
                <div className="text-4xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-3 xs:mb-3 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-5">{value.icon}</div>
                <h4 className="text-base xs:text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl xl1:text-xl xl2:text-2xl font-bold text-gray-900 mb-2 xs:mb-2 sm:mb-3 md:mb-3 lg:mb-3 xl:mb-4">
                  {value.title}
                </h4>
                <p className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base xl1:text-base xl2:text-lg text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs


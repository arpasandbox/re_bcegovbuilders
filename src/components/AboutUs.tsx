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
      className="py-10 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 xl1:py-28 xl2:py-32 bg-gray-100"
    >
      <div className="container mx-auto px-2 xs:px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 xl1:px-12 xl2:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20"
        >
          <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl1:text-6xl xl2:text-7xl font-bold text-secondary mb-2 xs:mb-2 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-6">
            About Us
          </h2>
          <p className="text-sm xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl xl1:text-xl xl2:text-2xl text-gray-600 max-w-2xl mx-auto px-2 xs:px-2 sm:px-4">
            {/* Building trust through excellence for over 25 years */}
          </p>
        </motion.div>

        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 grid-cols-2 gap-6 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 items-center mb-8 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl xl1:text-3xl xl2:text-4xl font-bold text-secondary mb-4 xs:mb-4 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8">
              BCE Construction Inc
            </h3>
            <p className="text-sm xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg xl1:text-xl xl2:text-xl text-gray-600 mb-3 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5">
              A service-disabled veteran-owned small business,
              delivers accomplished sitework, infrastructure, vertical construction, and
              specialty facility services. Our certified professionals uphold rigorous
              standards of safety, quality, and compliance serving government and
              commercial clients nationwide with dependable, code-compliant results.
            </p>
            {/* <p className="text-gray-600 mb-4 text-lg">
              Our team of experienced professionals brings together expertise in architecture,
              engineering, project management, and construction to deliver projects that exceed
              expectations. We pride ourselves on building lasting relationships with our
              clients, partners, and communities.
            </p>
            <p className="text-gray-600 text-lg">
              Today, we continue to grow and evolve, always maintaining our core values of
              quality, safety, innovation, and integrity in everything we do.
            </p> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-secondary to-accent p-4 xs:p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-2xl text-white"
          >
            <h3 className="text-lg xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl xl1:text-3xl xl2:text-4xl font-bold mb-4 xs:mb-4 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8">Why Choose Us?</h3>
            <ul className="space-y-2 xs:space-y-2 sm:space-y-3 md:space-y-3 lg:space-y-4 xl:space-y-5">
              <li className="flex items-start">
                <span className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl mr-2 xs:mr-2 sm:mr-2 md:mr-3 lg:mr-3 xl:mr-4">✓</span>
                <span className="text-sm xs:text-sm sm:text-base md:text-base lg:text-base xl:text-lg xl1:text-lg xl2:text-xl">25+ years of proven experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl mr-2 xs:mr-2 sm:mr-2 md:mr-3 lg:mr-3 xl:mr-4">✓</span>
                <span className="text-sm xs:text-sm sm:text-base md:text-base lg:text-base xl:text-lg xl1:text-lg xl2:text-xl">Licensed, bonded, and insured</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl mr-2 xs:mr-2 sm:mr-2 md:mr-3 lg:mr-3 xl:mr-4">✓</span>
                <span className="text-sm xs:text-sm sm:text-base md:text-base lg:text-base xl:text-lg xl1:text-lg xl2:text-xl">Full-service construction solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl mr-2 xs:mr-2 sm:mr-2 md:mr-3 lg:mr-3 xl:mr-4">✓</span>
                <span className="text-sm xs:text-sm sm:text-base md:text-base lg:text-base xl:text-lg xl1:text-lg xl2:text-xl">On-time and on-budget delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl mr-2 xs:mr-2 sm:mr-2 md:mr-3 lg:mr-3 xl:mr-4">✓</span>
                <span className="text-sm xs:text-sm sm:text-base md:text-base lg:text-base xl:text-lg xl1:text-lg xl2:text-xl">Dedicated project management</span>
              </li>
              <li className="flex items-start">
                <span className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl mr-2 xs:mr-2 sm:mr-2 md:mr-3 lg:mr-3 xl:mr-4">✓</span>
                <span className="text-sm xs:text-sm sm:text-base md:text-base lg:text-base xl:text-lg xl1:text-lg xl2:text-xl">Commitment to sustainability</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-lg xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl xl1:text-3xl xl2:text-4xl font-bold text-secondary mb-6 xs:mb-6 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10 text-center">
            Our Core Values
          </h3>
          <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-6 xl:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 xs:p-4 sm:p-5 md:p-5 lg:p-6 xl:p-8 rounded-lg xs:rounded-lg sm:rounded-xl shadow-md text-center"
              >
                <div className="text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl mb-3 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5">{value.icon}</div>
                <h4 className="text-base xs:text-base sm:text-base md:text-lg lg:text-lg xl:text-xl xl1:text-xl xl2:text-2xl font-bold text-gray-900 mb-2 xs:mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-3">
                  {value.title}
                </h4>
                <p className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-sm xl:text-base xl1:text-base xl2:text-lg text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs


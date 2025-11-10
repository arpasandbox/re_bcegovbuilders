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
      className="py-20 bg-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {/* Building trust through excellence for over 25 years */}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              BCE Construction Inc
            </h3>
            <p className="text-gray-600 mb-4 text-lg">
              a service-disabled veteran-owned small business,
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
            className="bg-gradient-to-br from-secondary to-accent p-12 rounded-2xl text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span>25+ years of proven experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span>Licensed, bonded, and insured</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span>Full-service construction solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span>On-time and on-budget delivery</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span>Dedicated project management</span>
              </li>
              <li className="flex items-start">
                <span className="text-2xl mr-3">✓</span>
                <span>Commitment to sustainability</span>
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
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs


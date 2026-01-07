import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Careers = () => {
  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries and comprehensive benefits packages.',
    },
    {
      title: 'Professional Development',
      description: 'Continuous learning opportunities and career growth support.',
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plans.',
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible schedules and generous paid time off.',
    },
    {
      title: 'Team Environment',
      description: 'Collaborative workplace with supportive colleagues.',
    },
    {
      title: 'Career Growth',
      description: 'Opportunities for advancement and skill development.',
    },
  ]

  const openPositions = [
    {
      title: 'Construction Project Manager',
      department: 'Project Management',
      location: 'Phoenix, AZ',
      type: 'Full-time',
    },
    {
      title: 'Workforce Compliance Specialist',
      department: 'Compliance',
      location: 'Phoenix, AZ',
      type: 'Full-time',
    },
    {
      title: 'Field Supervisor',
      department: 'Operations',
      location: 'Phoenix, AZ',
      type: 'Full-time',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="py-20 xs:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 xl1:py-40 xl2:py-44">
        <div className="container mx-auto px-2 xs:px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 xl1:px-12 xl2:px-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-24"
          >
            <h1 className="text-3xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl xl1:text-7xl xl2:text-8xl font-bold text-secondary mb-4 xs:mb-4 sm:mb-6 md:mb-8">
              Join Our Team
            </h1>
            <p className="text-base xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl xl1:text-2xl xl2:text-3xl text-gray-600 max-w-3xl mx-auto">
              Build your career with BCE Construction Inc. We're looking for talented individuals who are passionate about construction and excellence.
            </p>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16 xs:mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl xl1:text-5xl xl2:text-6xl font-bold text-secondary text-center mb-8 xs:mb-8 sm:mb-10 md:mb-12">
              Why Work With Us
            </h2>
            <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 grid-cols-3 gap-6 xs:gap-6 sm:gap-8 md:gap-8 lg:gap-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-lg xs:rounded-lg sm:rounded-xl shadow-md p-6 xs:p-6 sm:p-8 md:p-8 lg:p-10 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-lg xs:text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-secondary mb-3 xs:mb-3 sm:mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-sm xs:text-sm sm:text-base md:text-base lg:text-base xl:text-lg text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Open Positions Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16 xs:mb-16 sm:mb-20 md:mb-24"
          >
            <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl xl1:text-5xl xl2:text-6xl font-bold text-secondary text-center mb-8 xs:mb-8 sm:mb-10 md:mb-12">
              Open Positions
            </h2>
            <div className="space-y-4 xs:space-y-4 sm:space-y-6 md:space-y-8 max-w-4xl mx-auto">
              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-lg xs:rounded-lg sm:rounded-xl shadow-md p-6 xs:p-6 sm:p-8 md:p-8 lg:p-10 hover:shadow-xl transition-shadow"
                >
                  <div className="flex xs:flex-col sm:flex-col flex-row items-center justify-between gap-4 xs:gap-4 sm:gap-4 md:gap-6">

                    <div className="flex-1">
                      <h3 className="text-xl xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-secondary mb-2 xs:mb-2 sm:mb-3">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 xs:gap-3 sm:gap-4 text-sm xs:text-sm sm:text-base md:text-base lg:text-base text-gray-600">
                        <span className="flex items-center">
                          <span className="mr-2">📍</span>
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-2">🏢</span>
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-2">⏰</span>
                          {position.type}
                        </span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 xs:px-6 sm:px-8 md:px-10 lg:px-12 py-3 xs:py-3 sm:py-4 bg-secondary text-white rounded-lg xs:rounded-lg sm:rounded-xl font-semibold text-sm xs:text-sm sm:text-base md:text-base lg:text-base hover:bg-opacity-90 transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-lg xs:rounded-lg sm:rounded-xl shadow-lg p-8 xs:p-8 sm:p-10 md:p-12 lg:p-14 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-secondary text-center mb-6 xs:mb-6 sm:mb-8">
              Don't See a Position That Fits?
            </h2>
            <p className="text-base xs:text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl text-gray-600 text-center mb-8 xs:mb-8 sm:mb-10">
              We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="text-center space-y-4 xs:space-y-4 sm:space-y-5">
              <div className="bg-gray-50 p-6 xs:p-6 sm:p-8 rounded-lg xs:rounded-lg sm:rounded-xl text-center">
                <p className="text-sm xs:text-sm sm:text-base md:text-base lg:text-base xl:text-lg font-semibold text-secondary mb-2">
                  Send your resume to:
                </p>
                <p className="text-base xs:text-base sm:text-md md:text-lg lg:text-xl ">
                  careers@bcegov.com
                </p>
              </div>
              <div className="pt-4 xs:pt-4 sm:pt-6">
                <p className="text-sm xs:text-sm sm:text-base md:text-base lg:text-base text-gray-600 mb-4">
                  Or contact us at:
                </p>
                <div className="space-y-2 xs:space-y-2 text-sm xs:text-sm sm:text-base md:text-base text-gray-700">
                  <p>BCE Construction Inc</p>
                  <p>18444 N. 25th Avenue Suite 420</p>
                  <p>Phoenix, AZ 85023, USA</p>
                  <p className="pt-2">Phone: (480) 770-6555</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Careers





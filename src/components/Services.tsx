import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const services = [
    {
      title: 'Cabling',
      description: 'Implementing SCADA/HMI systems and high-speed fiber/Cat6 networks, including installation, testing, and CAN bridge integration for real-time control.',
      icon: '/images/cabling_logo.png',
    },
    {
      title: 'Civil Construction',
      description: 'Providing comprehensive site development services, including directional drilling, grading, excavation, foundations, concrete, substation build-outs, earthworks, and paving.',
      icon: '/images/civil_construction_logo.png',
    },
    {
      title: 'Electrical Construction',
      description: 'Delivering commercial and industrial improvements, utility-scale solar and wind T&D, decommissioning, and EV charging infrastructure installation and integration.',
      icon: '/images/electrical_construction_logo.png',
    },
    {
      title: 'Foundation',
      description: 'Designing and constructing transformer pads and foundations, including piers, driven piles, earth screws, slabs, and grade beams for robust structural support.',
      icon: '/images/foundation_logo.png',
    },
    {
      title: 'Project Management',
      description: 'Overseeing every phase of the project, from engineering and permitting to onsite management, quality assurance, and full procurement services.',
      icon: '/images/project_management_logo.png',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section
      id="services"
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
            Our Services
          </h2>
          <p className="text-sm xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl xl1:text-xl xl2:text-2xl text-gray-600 max-w-2xl mx-auto px-2 xs:px-2 sm:px-4">
            Comprehensive construction solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-10 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-50 p-4 xs:p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 rounded-lg xs:rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="mb-3 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5 flex justify-center">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-12 xs:w-12 sm:w-14 md:w-16 lg:w-20 xl:w-20 xl1:w-24 xl2:w-28 h-12 xs:h-12 sm:h-14 md:h-16 lg:h-20 xl:h-20 xl1:h-24 xl2:h-28 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    // Fallback to a construction icon if the image fails to load
                    const target = e.target as HTMLImageElement
                    if (!target.src.includes('data:image')) {
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMSA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDMgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjRjk3MzE2Ii8+Cjwvc3ZnPgo='
                    }
                  }}
                />
              </div>
              <h3 className="text-base xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl xl1:text-2xl xl2:text-3xl font-bold text-secondary mb-2 xs:mb-2 sm:mb-2 md:mb-3 lg:mb-3 xl:mb-4">
                {service.title}
              </h3>
              <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg xl1:text-lg xl2:text-xl text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services


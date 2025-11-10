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
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="mb-4 flex justify-center">
                <img
                  src={service.icon}
                  alt={`${service.title} icon`}
                  className="w-20 h-20 object-contain opacity-90 hover:opacity-100 transition-opacity"
                  onError={(e) => {
                    // Fallback to a construction icon if the image fails to load
                    const target = e.target as HTMLImageElement
                    if (!target.src.includes('data:image')) {
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMSA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDMgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjRjk3MzE2Ii8+Cjwvc3ZnPgo='
                    }
                  }}
                />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services


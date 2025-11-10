import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const PastPerformance = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      name: 'Downtown Office Complex',
      type: 'Commercial',
      year: '2023',
      description: '15-story office building with modern amenities',
      image: '/images/civil_construction_logo.png',
    },
    {
      name: 'Riverside Residential',
      type: 'Residential',
      year: '2023',
      description: '200-unit luxury residential development',
      image: '/images/foundation_logo.png',
    },
    {
      name: 'Highway Infrastructure',
      type: 'Infrastructure',
      year: '2022',
      description: 'Major highway expansion project',
      image: '/images/civil_construction_logo.png',
    },
    {
      name: 'Shopping Mall Renovation',
      type: 'Renovation',
      year: '2022',
      description: 'Complete renovation of 50,000 sq ft mall',
      image: '/images/electrical_construction_logo.png',
    },
    {
      name: 'Government Building',
      type: 'Commercial',
      year: '2021',
      description: 'State-of-the-art government facility',
      image: '/images/project_management_logo.png',
    },
    {
      name: 'Educational Campus',
      type: 'Institutional',
      year: '2021',
      description: 'Multi-building university campus expansion',
      image: '/images/cabling_logo.png',
    },
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '25+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '50+', label: 'Awards Won' },
  ]

  return (
    <section
      id="projects"
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
            Past Performance
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A track record of excellence and successful project delivery
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative h-64 rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/30 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-secondary bg-white/90 px-2 py-1 rounded">
                      {project.type}
                    </span>
                    <span className="text-sm text-white/90 bg-black/30 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.name}
                  </h3>
                </div>
                <p className="text-white/90 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PastPerformance


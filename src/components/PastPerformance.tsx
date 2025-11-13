import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const PastPerformance = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      name: 'LEIDOS',
      type: 'FEDERAL SUBCONTRACTOR',
      year: 'ACTIVE',
      description: 'FEDERALTM - P010262277 | PROFESSIONAL WORKFORCE COMPLIANCE DEVELOPMENT | NATIONWIDE | $5.2M',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'UNIVERSITY OF WASHINGTON MEDICAL CENTER',
      type: 'COMMERCIAL',
      year: 'COMPLETE',
      description: '207302 | COURSE OF CONSTRUCTION | SEATTLE, WA',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'EVERGREEN MIDDLE SCHOOL',
      type: 'COUNTY GOVERNMENT',
      year: 'COMPLETE',
      description: '73880-0036 | POST - CONSTRUCTION | REDMOND, WA',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'KIRKLAND MIDDLE SCHOOL',
      type: 'COUNTY GOVERNMENT',
      year: 'COMPLETE',
      description: '73880-0029 | COURSE OF CONSTRUCTION | KIRKLAND, WA',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'FINN HILL MIDDLE SCHOOL',
      type: 'COUNTY GOVERNMENT',
      year: 'COMPLETE',
      description: '73880-0028 | COURSE OF CONSTRUCTION | KIRKLAND, WA',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'REDMOND HIGH SCHOOL',
      type: 'COUNTY GOVERNMENT',
      year: 'COMPLETE',
      description: '73880-0032 | POST- CONSTRUCTION | REDMOND, WA',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'INGLEWOOD MIDDLE SCHOOL',
      type: 'COUNTY GOVERNMENT',
      year: 'COMPLETE',
      description: '73880-0027 | POST- CONSTRUCTION | SAMMAMISH, WA',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'ROSE HILL MIDDLE SCHOOL',
      type: 'COUNTY GOVERNMENT',
      year: 'COMPLETE',
      description: '73880-0034 | COURSE OF CONSTRUCTION | REDMOND, WA',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'INTERNATIONAL COMMUNITY SCHOOL',
      type: 'COUNTY GOVERNMENT',
      year: 'COMPLETE',
      description: '73880-0030 | POST- CONSTRUCTION | KIRKLAND, WA',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'LAKE WASHINGTON HIGH SCHOOL',
      type: 'COUNTY GOVERNMENT',
      year: 'COMPLETE',
      description: '73880-0026 | POST- CONSTRUCTION | KIRKLAND, WA',
      image: '/images/bce_pp_logo.png',
    },

    {
      name: '',
      type: '',
      year: '',
      description: '',
      image: '/images/bce_pp_logo.png',
    },

    {
      name: '',
      type: '',
      year: '',
      description: '',
      image: '/images/bce_pp_logo.png',
    },
  ]

  // const stats = [
  //   { number: '500+', label: 'Projects Completed' },
  //   { number: '25+', label: 'Years Experience' },
  //   { number: '98%', label: 'Client Satisfaction' },
  //   { number: '50+', label: 'Awards Won' },
  // ]

  return (
    <section
      id="projects"
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
            Past Performance
          </h2>
          <p className="text-sm xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl xl1:text-xl xl2:text-2xl text-gray-600 max-w-2xl mx-auto px-2 xs:px-2 sm:px-4">
            A track record of excellence and successful project delivery
          </p>
        </motion.div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 grid-cols-4  gap-4 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 mb-8 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl xl1:text-5xl xl2:text-6xl font-bold text-secondary mb-1 xs:mb-1 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-3">
                {stat.number}
              </div>
              <div className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base xl1:text-lg xl2:text-lg text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Projects Grid */}
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-cols-3 gap-10 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10">
          
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative h-48 xs:h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 xl1:h-72 xl2:h-80 rounded-lg xs:rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-fit bg-[#61b5d6] bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              >
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/20 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-3 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-6 text-white">
                <div>
                  <div className="flex items-center justify-between mb-2 xs:mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-3">
                    <span className="text-xs xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm font-semibold text-secondary bg-white/90 px-1 xs:px-1 sm:px-1 md:px-2 lg:px-2 xl:px-2 py-0.5 xs:py-0.5 sm:py-0.5 md:py-1 lg:py-1 xl:py-1 rounded">
                      {project.type}
                    </span>
                    <span className="text-xs xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white/90 bg-black/30 px-1 xs:px-1 sm:px-1 md:px-2 lg:px-2 xl:px-2 py-0.5 xs:py-0.5 sm:py-0.5 md:py-1 lg:py-1 xl:py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-base xs:text-base sm:text-lg md:text-lg lg:text-xl xl:text-xl xl1:text-2xl xl2:text-2xl font-bold text-white mb-1 xs:mb-1 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2">
                    {project.name}
                  </h3>
                </div>
                <p className="text-white/90 text-xs xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm xl1:text-base xl2:text-base">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PastPerformance


import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const PastPerformance = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  console.log(isMobile);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 769)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const projects = [
    {
      name: 'VA TUCSON PARKING LOT SOLAR PV',
      type: 'FEDERAL PRIME CONTRACT, SDVOSB SET-ASIDE',
      status: 'PENDING',
      project: '762-24-103',
      description: 'NOTICE TO PROCEED (NTP)',
      location:'TUCSON, AZ',
      price:'$2.2M',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'LEIDOS',
      type: 'FEDERAL SUBCONTRACTOR',
      status: 'ACTIVE',
      project: 'FEDERALTM - P010262277',
      description: 'PROFESSIONAL WORKFORCE COMPLIANCE DEVELOPMENT',
      location:'NATIONWIDE',
      price:'$5.2M',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'MCFARLAND SOLAR 1',
      type: 'COMMERCIAL',
      status: 'ACTIVE',
      project: 'C10818',
      description: 'POST- CONSTRUCTION',
      location:'DATELAND, AZ',
      price:'$2M',
      image: '/images/projects/project_3.png',
    },
    {
      name: 'CITY OF BELLEVUE NEW WAY OF WORK (NWOW)',
      type: 'COMMERCIAL',
      status: 'COMPLETE',
      project: '740400019',
      description: 'COURSE OF CONSTRUCTION',
      location:'BELLEVUE, WA',
      price:'',
      image: '/images/projects/project_13.png',
    },
    {
      name: 'SAULSBURY',
      type: 'COMMERCIAL',
      status: 'COMPLETE',
      project: 'C10818-07',
      description: 'SECURITY SERVICES',
      location:'DATELAND, AZ',
      price:'',
      image: '/images/projects/project_5.png',
    },
    {
      name: 'UNIVERSITY OF WASHINGTON MEDICAL CENTER',
      name1: 'B WING REHAB PLASTER ROOM',
      type: 'COMMERCIAL',
      status: 'COMPLETE',
      project: '207302',
      description: 'COURSE OF CONSTRUCTION',
      location:'SEATTLE, WA',
      price:'',
      image: '/images/projects/project_6.png',
    },
    {
      name: 'EVERGREEN MIDDLE SCHOOL',
      type: 'COUNTY GOVERNMENT',
      status: 'COMPLETE',
      project: '73880-0036',
      description: 'POST - CONSTRUCTION',
      location:'REDMOND, WA',
      price:'',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'KIRKLAND MIDDLE SCHOOL',
      type: 'COUNTY GOVERNMENT',
      status: 'COMPLETE',
      project: '73880-0029',
      description: 'COURSE OF CONSTRUCTION',
      location:'KIRKLAND, WA',
      price:'',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'FINN HILL MIDDLE SCHOOL',
      type: 'COUNTY GOVERNMENT',
      status: 'COMPLETE',
      project: '73880-0028',
      description: 'COURSE OF CONSTRUCTION',
      location:'KIRKLAND, WA',
      price:'',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'REDMOND HIGH SCHOOL',
      type: 'COUNTY GOVERNMENT',
      status: 'COMPLETE',
      project: '73880-0032',
      description: 'POST- CONSTRUCTION',
      location:'REDMOND, WA',
      price:'',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'INGLEWOOD MIDDLE SCHOOL',
      type: 'COUNTY GOVERNMENT',
      status: 'COMPLETE',
      project: '73880-0027',
      description: 'POST- CONSTRUCTION',
      location:'SAMMAMISH, WA',
      price:'',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'ROSE HILL MIDDLE SCHOOL',
      type: 'COUNTY GOVERNMENT',
      status: 'COMPLETE',
      project: '73880-0034',
      description: 'COURSE OF CONSTRUCTION',
      location:'REDMOND, WA',
      price:'',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'INTERNATIONAL COMMUNITY SCHOOL',
      type: 'COUNTY GOVERNMENT',
      status: 'COMPLETE',
      project: '73880-0030',
      description: 'POST- CONSTRUCTION',
      location:'KIRKLAND, WA',
      price:'',
      image: '/images/bce_pp_logo.png',
    },
    {
      name: 'LAKE WASHINGTON HIGH SCHOOL',
      type: 'COUNTY GOVERNMENT',
      status: 'COMPLETE',
      project: '73880-0026',
      description: 'POST- CONSTRUCTION',
      location:'KIRKLAND, WA',
      price:'',
      image: '/images/bce_pp_logo.png',
    },    
  ]

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

        {/* Projects Grid */}
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 grid-cols-3 gap-10 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10 mb-8 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
          
          {projects.slice(0, 6).map((project, index) => {
            const isActive = activeCard === index
            const showDetails = isActive
            const isEmpty = !project.name || !project.description
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={!isMobile ? { scale: 1.05, y: -5 } : undefined}
                onClick={() => {
                  // Toggle active state on click for mobile (below lg)
                  if (isMobile && !isEmpty) {
                    setActiveCard(isActive ? null : index)
                  }
                }}
                className={`relative h-48 xs:h-48 sm:h-52 md:h-56 lg:h-60 xl:h-72 xl1:h-80 xl2:h-96 rounded-lg xs:rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group ${!isEmpty ? 'cursor-pointer' : 'cursor-default'}`}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-fit bg-[#61b5d6] bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                >
                  {/* Dark Overlay for better text readability */}
                  <div className={`absolute inset-0 transition-colors duration-300 ${
                    showDetails 
                      ? 'bg-gradient-to-t from-black/70 via-black/50 to-black/30' 
                      : 'bg-gradient-to-t from-black/60 via-black/40 to-black/20 group-hover:from-black/50 group-hover:via-black/30 group-hover:to-black/10'
                  }`} />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-3 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-6 text-white">
                  <div>
                    <div className="flex items-center justify-between mb-2 xs:mb-2 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-3">
                      <span className="text-xs xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm font-semibold text-secondary bg-white/90 px-1 xs:px-1 sm:px-1 md:px-2 lg:px-2 xl:px-2 py-0.5 xs:py-0.5 sm:py-0.5 md:py-1 lg:py-1 xl:py-1 rounded">
                        {project.type}
                      </span>
                      <span className="text-xs xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm text-white/90 bg-black/30 px-1 xs:px-1 sm:px-1 md:px-2 lg:px-2 xl:px-2 py-0.5 xs:py-0.5 sm:py-0.5 md:py-1 lg:py-1 xl:py-1 rounded">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-base xs:text-base sm:text-md md:text-md lg:text-xl xl:text-xl xl1:text-2xl xl2:text-2xl font-bold text-white mb-1 xs:mb-1 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2">
                      {project.name}
                    </h3>
                    <h3 className="text-base xs:text-base sm:text-sm md:text-sm lg:text-md xl:text-md xl1:text-2xl xl2:text-2xl font-semibold text-white mb-1 xs:mb-1 sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2">
                      {project.name1}
                    </h3>
                  </div>

                  {/* Description - hidden by default, shown on hover (desktop) or click (mobile) */}

                  <div className={`transition-all duration-300 overflow-hidden ${showDetails ? 'max-h-32 xs:max-h-32 sm:max-h-36 md:max-h-40 lg:max-h-44 xl:max-h-48 xl2:max-h-48 opacity-100' 
                      : isMobile ? 'max-h-0 opacity-0' : 'max-h-0 opacity-0 lg:group-hover:max-h-44 lg:group-hover:opacity-100 xl:group-hover:max-h-48 xl:group-hover:opacity-100 xl1:group-hover:max-h-48 xl1:group-hover:opacity-100 xl2:group-hover:max-h-48 xl2:group-hover:opacity-100'
                  }`}>
                    <p className="text-white/90 text-xs xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm xl1:text-base xl2:text-base pt-2 xs:pt-2 sm:pt-2 md:pt-3 lg:pt-3 xl:pt-3">
                      {project.project}
                    </p>
                    <p className="text-white/90 text-xs xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm xl1:text-base xl2:text-base pt-2 xs:pt-2 sm:pt-2 md:pt-3 lg:pt-3 xl:pt-3">
                      {project.description}
                    </p>
                    <p className="text-white/90 text-xs xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm xl1:text-base xl2:text-base pt-2 xs:pt-2 sm:pt-2 md:pt-3 lg:pt-3 xl:pt-3">
                      {project.location}
                    </p>
                    <p className="text-white/90 text-xs xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm xl1:text-base xl2:text-base pt-2 xs:pt-2 sm:pt-2 md:pt-3 lg:pt-3 xl:pt-3">
                      {project.price}
                    </p>
                  </div>

                  {/* Hint text for mobile when not active */}
                  {!showDetails && isMobile && !isEmpty && (
                    <p className="text-white/70 text-xs xs:text-xs sm:text-xs italic pt-2 animate-pulse">
                      Tap to view details
                    </p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* See All Link */}
        {projects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <Link
              to="/past-performance"
              className="inline-flex items-center px-6 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-3 xs:py-3 sm:py-3 md:py-4 lg:py-4 xl:py-5 bg-gradient-to-r from-secondary to-accent text-white font-semibold text-sm xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              See All Projects
              <svg
                className="w-5 h-5 xs:w-5 xs:h-5 sm:w-6 sm:h-6 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default PastPerformance


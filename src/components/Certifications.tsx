import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<number | null>(null)

  // Certification logos from /images directory
  const certifications = [
    {
      name: 'Cabling',
      image: '/images/cabling_logo.png',
    },
    {
      name: 'Civil Construction',
      image: '/images/civil_construction_logo.png',
    },
    {
      name: 'Electrical Construction',
      image: '/images/electrical_construction_logo.png',
    },
    {
      name: 'Foundation',
      image: '/images/foundation_logo.png',
    },
    {
      name: 'Project Management',
      image: '/images/project_management_logo.png',
    },
  ]

  // Calculate max index (show 3 items at a time, so for 5 items, max index is 2)
  const itemsPerView = 3
  const maxIndex = Math.max(0, certifications.length - itemsPerView)

  // Auto-scroll carousel
  useEffect(() => {
    if (!isPaused && isInView) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
      }, 3000) // Change every 3 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPaused, isInView, maxIndex])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000) // Resume after 5 seconds
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000)
  }

  const previousSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000)
  }

  return (
    <section
      id="certifications"
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
            Certifications & Accreditations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Committed to the highest standards of quality, safety, and environmental responsibility
          </p>
          
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          {/* <button
            onClick={previousSlide}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white shadow-lg rounded-full transition-all duration-300 group hidden md:flex items-center justify-center"
            aria-label="Previous certification"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-secondary transition-colors"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button> */}

          {/* <button
            onClick={nextSlide}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white/80 hover:bg-white shadow-lg rounded-full transition-all duration-300 group hidden md:flex items-center justify-center"
            aria-label="Next certification"
          >
            <svg
              className="w-6 h-6 text-gray-700 group-hover:text-secondary transition-colors"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button> */}

          {/* Carousel */}
          <div className="overflow-hidden px-12 md:px-16">
            <div className="relative">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`
                }}
              >
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-4 w-1/3 "
                    // style={{ width: '33.333333%' }}
                  >
                    <div className="bg-accent p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 hover:border-secondary flex flex-col items-center justify-center h-32 md:h-40">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain mb-2 md:mb-3"
                      />
                      {/* <p className="text-xs md:text-sm font-semibold text-gray-700 text-center">
                        {cert.name}
                      </p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          {/* <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-secondary'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>

      </div>
    </section>
  )
}

export default Certifications


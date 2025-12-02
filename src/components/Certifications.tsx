import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  // const [isPaused, setIsPaused] = useState(false)
  const [isPaused] = useState(false)
  const intervalRef = useRef<number | null>(null)

  // Certification logos from /images directory
  const certifications = [
    {
      name: 'SDVOSB',
      image: '/images/sdvosb-logo.png',
    },
    {
      name: '8(a)+Certified',
      image: '/images/8(a)+Certified.png',
    },
    {
      name: 'ROC',
      image: '/images/roc-logo.png',
    },
    {
      name: 'MBE',
      image: '/images/mbe-logo.png',
    },
    {
      name: 'SBE',
      image: '/images/sbe-logo.png',
    },
    {
      name: 'DBE',
      image: '/images/dbe-logo.png',
    },
  ]

  // Responsive items per view based on screen size
  const [itemsPerView, setItemsPerView] = useState(3)
  
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth
      let newItemsPerView = 3
      if (width <= 480) {
        newItemsPerView = 1 // xs and sm: 1 item
      } else if (width <= 768) {
        newItemsPerView = 2 // md: 2 items
      } else {
        newItemsPerView = 3 // lg and above: 3 items
      }
      
      setItemsPerView(newItemsPerView)
      // Reset index if it becomes invalid with new itemsPerView
      const newMaxIndex = Math.max(0, certifications.length - newItemsPerView)
      setCurrentIndex((prev) => Math.min(prev, newMaxIndex))
    }
    
    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [certifications.length])
  
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

  // const goToSlide = (index: number) => {
  //   setCurrentIndex(index)
  //   setIsPaused(true)
  //   setTimeout(() => setIsPaused(false), 5000) // Resume after 5 seconds
  // }

  // const nextSlide = () => {
  //   setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  //   setIsPaused(true)
  //   setTimeout(() => setIsPaused(false), 5000)
  // }

  // const previousSlide = () => {
  //   setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  //   setIsPaused(true)
  //   setTimeout(() => setIsPaused(false), 5000)
  // }

  return (
    <section
      id="certifications"
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
            Certifications & Accreditations
          </h2>
          <p className="text-sm xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl xl1:text-xl xl2:text-2xl text-gray-600 max-w-2xl mx-auto px-2 xs:px-2 sm:px-4">
            Committed to the highest standards of quality, safety, and environmental responsibility
          </p>
          
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden px-2 xs:px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 xl1:px-20 xl2:px-24">
            <div className="relative">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
                }}
              >
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 px-2 xs:px-2 sm:px-3 md:px-4 lg:px-4 xl:px-5 ${
                      itemsPerView === 1 ? 'w-full' : 
                      itemsPerView === 2 ? 'w-1/2' : 
                      'w-1/3'
                    }`}
                  >
                    <div className="bg-gray-50 p-3 xs:p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 xl1:p-10 xl2:p-12 rounded-lg xs:rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 flex flex-col items-center justify-center h-24 xs:h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 xl1:h-44 xl2:h-48">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-12 h-12 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-20 xl:h-20 xl1:w-24 xl1:h-24 xl2:w-28 xl2:h-28 object-contain"
                      />
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


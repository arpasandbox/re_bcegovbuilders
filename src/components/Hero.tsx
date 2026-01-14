import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0) // 1 for next, -1 for previous
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<number | null>(null)

  // Construction-related background images from hero_slides folder
  const slides = [
    {
      id: 1,
      image: '/images/hero_slides/hero_slide1.png',
      alt: 'Construction site with workers',
    },
    {
      id: 2,
      image: '/images/hero_slides/hero_slide2.png',
      alt: 'Modern construction building',
    },
    {
      id: 3,
      image: '/images/hero_slides/hero_slide3.jpeg',
      alt: 'McFarland Project',
    },
  ]

  // Auto-advance slider
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setDirection(1) // Next direction
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000) // Change slide every 5 seconds
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
  }, [slides.length, isPaused])

  // Go to specific slide
  // const goToSlide = (index: number) => {
  //   setDirection(index > currentSlide ? 1 : -1)
  //   setCurrentSlide(index)
  //   setIsPaused(true)
  //   setTimeout(() => setIsPaused(false), 8000) // Resume after 8 seconds
  // }

  // Previous slide
  const previousSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 8000)
  }

  // Next slide
  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 8000)
  }

  // Touch handlers for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      previousSlide()
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            initial={{
              x: direction > 0 ? '100%' : '-100%',
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: direction > 0 ? '-100%' : '100%',
            }}
            transition={{
              x: { type: 'tween', duration: 0.8, ease: 'easeInOut' },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].alt}
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on md and up */}
      <button
        onClick={previousSlide}
        className="hidden md:flex absolute left-2 xs:left-2 sm:left-3 md:left-4 lg:left-6 xl:left-8 top-1/2 -translate-y-1/2 z-20 p-2 xs:p-2 sm:p-2 md:p-3 lg:p-3 xl:p-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg
          className="w-4 xs:w-4 sm:w-5 md:w-6 lg:w-6 xl:w-7 h-4 xs:h-4 sm:h-5 md:h-6 lg:h-6 xl:h-7 text-white group-hover:scale-110 transition-transform"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-2 xs:right-2 sm:right-3 md:right-4 lg:right-6 xl:right-8 top-1/2 -translate-y-1/2 z-20 p-2 xs:p-2 sm:p-2 md:p-3 lg:p-3 xl:p-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg
          className="w-4 xs:w-4 sm:w-5 md:w-6 lg:w-6 xl:w-7 h-4 xs:h-4 sm:h-5 md:h-6 lg:h-6 xl:h-7 text-white group-hover:scale-110 transition-transform"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      {/* <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentSlide ? 'true' : 'false'}
          />
        ))}
      </div> */}

      {/* Content */}
      <div className="container mx-auto px-2 xs:px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 xl1:px-12 xl2:px-16 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl1:text-7xl xl2:text-8xl font-bold text-white mb-4 xs:mb-4 sm:mb-5 md:mb-6 lg:mb-6 xl:mb-8 drop-shadow-2xl"
          >
            <p>CIVIL CONSTRUCTION &</p>
            <p>RENEWABLE ENERGY</p>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl xl1:text-2xl xl2:text-3xl text-gray-100 mb-6 xs:mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-10 max-w-3xl mx-auto drop-shadow-lg px-2 xs:px-2 sm:px-4"
          >
            Providing Civil Construction & End-to-End Renewable Energy Systems
          </motion.p>

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent text-white font-semibold rounded-lg shadow-lg hover:bg-secondary transition-colors"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors backdrop-blur-sm"
            >
              Our Services
            </motion.a>
          </motion.div> */}
        </div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/10"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full"
            />
          </motion.div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Hero


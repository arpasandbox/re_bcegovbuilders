import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

 const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    console.log(screenWidth);
    console.log(screenHeight);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const isPastPerformancePage = location.pathname === '/past-performance'
  const isPrivacyPolicyPage = location.pathname === '/privacy-policy'
  const isTermsOfServicePage = location.pathname === '/terms-of-service'
  const isCareersPage = location.pathname === '/careers'

  

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isPastPerformancePage || isPrivacyPolicyPage || isTermsOfServicePage || isCareersPage
          ? 'bg-white shadow-lg py-2 xs:py-2 sm:py-2 md:py-3 lg:py-3 xl:py-3 xl1:py-4 xl2:py-4'
          : isScrolled
          ? 'bg-white shadow-lg py-2 xs:py-2 sm:py-2 md:py-3 lg:py-3 xl:py-3 xl1:py-4 xl2:py-4'
          : 'bg-transparent py-3 xs:py-3 sm:py-4 md:py-4 lg:py-5 xl:py-5 xl1:py-6 xl2:py-6'
      }`}
    >
      <div className="container mx-auto px-2 xs:px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 xl1:px-12 xl2:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2 xs:w-[200px] xs:h-[40px] sm:w-[200px] sm:h-[40px] lg:w-[200px] lg:h-[56px] cursor-pointer">

              <img src="/images/bce_logo3.svg" alt="BCE Construction Inc Logo" 
                className={`transition-all duration-300 ${
                  isPastPerformancePage || isPrivacyPolicyPage || isTermsOfServicePage || isCareersPage || isScrolled
                    ? 'h-8 xs:h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 xl1:h-20 xl2:h-24' 
                    : 'hidden' 
                } w-auto`}/>

              <img src="/images/bce_logo3_w.svg" alt="BCE Construction Inc Logo" 
                className={`transition-all duration-300 ${
                  isPastPerformancePage || isPrivacyPolicyPage || isTermsOfServicePage || isCareersPage || isScrolled
                    ? 'hidden' 
                    : 'h-8 xs:h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 xl1:h-20 xl2:h-24' 
                } w-auto`}/>

            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="xs:hidden sm:hidden md:hidden flex items-center space-x-3 xs:space-x-3 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 xl1:space-x-10 xl2:space-x-12">
            {navLinks.map((link, index) => {
              if (link.name === 'Home') {
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <Link
                      to="/"
                      className={`text-sm xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg xl1:text-lg xl2:text-xl font-medium transition-colors ${
                        isPastPerformancePage || isPrivacyPolicyPage || isTermsOfServicePage || isCareersPage
                          ? 'text-secondary hover:text-accent'
                          : isScrolled
                          ? 'text-secondary hover:text-accent'
                          : 'text-white hover:text-accent'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )
              }
              return (
                <motion.a
                  key={link.name}
                  href={location.pathname === '/' ? link.href : `/${link.href}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className={`text-sm xs:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg xl1:text-lg xl2:text-xl font-medium transition-colors ${
                    isPastPerformancePage || isPrivacyPolicyPage || isTermsOfServicePage || isCareersPage
                      ? 'text-secondary hover:text-accent'
                      : isScrolled
                      ? 'text-secondary hover:text-accent'
                      : 'text-white hover:text-accent'
                  }`}
                >
                  {link.name}
                </motion.a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`xs:block sm:block md:block hidden p-2 rounded-lg transition-colors ${
              isPastPerformancePage || isPrivacyPolicyPage || isTermsOfServicePage || isCareersPage
                ? 'text-secondary hover:bg-gray-100'
                : isScrolled
                ? 'text-gray-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-2 xs:px-2 sm:px-4 py-3 xs:py-3 sm:py-4 space-y-2 xs:space-y-2 sm:space-y-3">
              {navLinks.map((link) => {
                if (link.name === 'Home') {
                  return (
                    <Link
                      key={link.name}
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-gray-700 hover:text-secondary font-medium transition-colors text-sm xs:text-sm sm:text-base md:text-base py-1 xs:py-1 sm:py-2 md:py-2"
                    >
                      {link.name}
                    </Link>
                  )
                }
                return (
                  <a
                    key={link.name}
                    href={location.pathname === '/' ? link.href : `/${link.href}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-gray-700 hover:text-secondary font-medium transition-colors text-sm xs:text-sm sm:text-base md:text-base py-1 xs:py-1 sm:py-2 md:py-2"
                  >
                    {link.name}
                  </a>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar


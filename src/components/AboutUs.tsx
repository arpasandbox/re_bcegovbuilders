import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })


  return (
    <section
      id="about"
      ref={ref}
      className="py-8 xs:py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 xl1:py-24 xl2:py-28 bg-gray-100"
    >
      <div className="container mx-auto px-4 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 xl1:px-14 xl2:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16"
        >
          <h2 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xl1:text-6xl xl2:text-7xl font-bold text-secondary mb-3 xs:mb-3 sm:mb-4 md:mb-4 lg:mb-5 xl:mb-6">
            About Us
          </h2>
          {/* <p className="text-sm xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl xl1:text-xl xl2:text-2xl text-gray-600 max-w-3xl mx-auto">
            Building trust through excellence for over 25 years
          </p> */}
        </motion.div>

        {/* BCE Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-6 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 mb-10 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20 text-secondary h-full flex flex-col">
            {/* <div className="flex items-center justify-center mb-4 xs:mb-4 sm:mb-5 md:mb-5 lg:mb-6 xl:mb-8">
              <h3 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl xl1:text-4xl xl2:text-5xl font-bold">
              </h3>
            </div> */}
            <p className="text-sm xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg xl1:text-xl xl2:text-xl text-secondary text-center leading-relaxed flex-grow">
              A service-disabled veteran-owned small business,
              delivers accomplished sitework, infrastructure, vertical construction, and
              specialty facility services. Our certified professionals uphold rigorous
              standards of safety, quality, and compliance serving government and
              commercial clients nationwide with dependable, code-compliant results.
            </p>
          </div>
        </motion.div>

        {/* Verse */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-6 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14 mb-10 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20 text-secondary h-full flex flex-col">
          <div className="flex items-center justify-center mb-4 xs:mb-4 sm:mb-5 md:mb-5 lg:mb-6 xl:mb-8">
            <h3 className="text-xl xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl xl1:text-4xl xl2:text-4xl font-bold text-secondary">
              VERSE
            </h3>
          </div>
          <p className="text-sm xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg xl1:text-xl xl2:text-xl text-gray-700 text-center leading-relaxed flex-grow">
            "Whatever you do, work at it with all your heart, as working for the Lord, not for men."
            <span className="font-bold">— Colossians 3:23</span>
          </p>
        </div>
        </motion.div>

        {/* Mission Vision Values */}
        <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 xs:gap-6 sm:gap-8 md:gap-8 lg:gap-10 xl:gap-12 mb-10 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16 xl:mb-20">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-full"
          >
            <div className="bg-white rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-6 xs:p-6 sm:p-8 md:p-8 lg:p-10 xl:p-12 h-full flex flex-col">
              <div className="flex items-center justify-center mb-4 xs:mb-4 sm:mb-5 md:mb-5 lg:mb-6 xl:mb-8">
                {/* <div className="text-4xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl mr-3 xs:mr-3 sm:mr-4">🎯</div> */}
                <h3 className="text-xl xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl xl1:text-4xl xl2:text-4xl font-bold text-secondary">
                  Our Mission
                </h3>
              </div>
              <p className="text-sm xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg xl1:text-xl xl2:text-xl text-secondary  leading-relaxed flex-grow">
                To build not only structures, but also lives and communities, guided by Christian values and
                servant leadership. We dedicate our work to honoring God through integrity, safety, and
                excellence, while extending care to orphans, foster youth, veterans, and families in need. Every
                project is an opportunity to serve with faith, protect resources, and create lasting value by
                delivering comprehensive solutions across construction, solar, IT, and community services.
              </p>
            </div>
          </motion.div>

          {/* Vision Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="bg-gradient-to-br from-secondary to-accent rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-6 xs:p-6 sm:p-8 md:p-8 lg:p-10 xl:p-12 text-white h-full flex flex-col">
              <div className="flex items-center justify-center mb-4 xs:mb-4 sm:mb-5 md:mb-5 lg:mb-6 xl:mb-8">
                {/* <div className="text-4xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl mr-3 xs:mr-3 sm:mr-4">👁️</div> */}
                <h3 className="text-xl xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl xl1:text-4xl xl2:text-4xl font-bold">
                  Our Vision
                </h3>
              </div>
              <p className="text-sm xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg xl1:text-xl xl2:text-xl text-white/95  leading-relaxed flex-grow">
                To be more than a company, to be a ministry through work. We envision projects that endure, lives
                that are uplifted, and communities that are transformed. By integrating faith, stewardship, and
                technical mastery, BCE seeks to be a trusted partner that reflects Christ-centered service, ensuring
                that our work always honors people, purpose, and God's calling to care for the vulnerable.
              </p>
            </div>
          </motion.div>


          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="bg-white rounded-lg xs:rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg p-6 xs:p-6 sm:p-8 md:p-8 lg:p-10 xl:p-12 h-full flex flex-col">
              <div className="flex items-center justify-center mb-4 xs:mb-4 sm:mb-5 md:mb-5 lg:mb-6 xl:mb-8">
                {/* <div className="text-4xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl mr-3 xs:mr-3 sm:mr-4">👁️</div> */}
                <h3 className="text-xl xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl xl1:text-4xl xl2:text-4xl text-secondary font-bold">
                  Our Values
                </h3>
              </div>

              <ul className="text-sm xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-lg xl1:text-xl xl2:text-xl text-secondary  leading-relaxed flex-grow">
                <li className='mb-2'><p className="font-bold">Faith</p><p>Trusting God to guide our mission and actions.</p></li>
                <li className='mb-2'><p className="font-bold">Stewardship</p><p>Wisely managing resources for lasting impact.</p></li>
                <li className='mb-2'><p className="font-bold">Integrity</p><p>Acting with honesty, humility, and accountability.</p></li>
                <li className='mb-2'><p className="font-bold">Excellence</p><p>Pursuing the highest standards in all we do.</p></li>
                <li className='mb-2'><p className="font-bold">Service</p><p>Leading with compassion and care for others.</p></li>
                <li className='mb-2'><p className="font-bold">Community</p><p>Building relationships and uplifting families.</p></li>
                <li className='mb-2'><p className="font-bold">Dedication</p><p>Remaining steadfast in purpose and commitment.</p></li>
              </ul>
            </div>
          </motion.div>


        </div>

        


      </div>
    </section>
  )
}

export default AboutUs


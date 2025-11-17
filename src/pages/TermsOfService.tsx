import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <section className="py-20 xs:py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 xl1:py-40 xl2:py-44">
        <div className="container mx-auto px-2 xs:px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 xl1:px-12 xl2:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white rounded-lg xs:rounded-lg sm:rounded-xl shadow-lg p-6 xs:p-6 sm:p-8 md:p-10 lg:p-12 xl:p-14"
          >
            <h1 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl xl1:text-6xl xl2:text-6xl font-bold text-secondary mb-6 xs:mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              Terms of Service
            </h1>
            
            <div className="prose prose-sm xs:prose-sm sm:prose-base md:prose-lg lg:prose-lg xl:prose-xl max-w-none text-gray-700 space-y-6 xs:space-y-6 sm:space-y-8">
              <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-gray-500 italic">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  1. Acceptance of Terms
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  2. Use License
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  Permission is granted to temporarily access the materials on BCE Construction Inc's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 xs:space-y-2 sm:space-y-3 text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg ml-4 xs:ml-4 sm:ml-6">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                </ul>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  3. Services
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  BCE Construction Inc provides professional workforce management, construction management, and related services. All services are subject to separate agreements and terms that will be provided at the time of engagement.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  4. Disclaimer
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  The materials on BCE Construction Inc's website are provided on an 'as is' basis. BCE Construction Inc makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  5. Limitations
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  In no event shall BCE Construction Inc or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on BCE Construction Inc's website, even if BCE Construction Inc or a BCE Construction Inc authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  6. Accuracy of Materials
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  The materials appearing on BCE Construction Inc's website could include technical, typographical, or photographic errors. BCE Construction Inc does not warrant that any of the materials on its website are accurate, complete, or current. BCE Construction Inc may make changes to the materials contained on its website at any time without notice.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  7. Links
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  BCE Construction Inc has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by BCE Construction Inc of the site. Use of any such linked website is at the user's own risk.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  8. Modifications
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  BCE Construction Inc may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  9. Governing Law
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of the State of Arizona, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  10. Contact Information
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 xs:p-4 sm:p-5 md:p-6 rounded-lg xs:rounded-lg sm:rounded-xl">
                  <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg font-semibold text-secondary mb-2">BCE Construction Inc</p>
                  <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-gray-700">18444 N. 25th Avenue Suite 420</p>
                  <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-gray-700">Phoenix, AZ 85023, USA</p>
                  <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-gray-700 mt-2">Phone: (480) 770-6555</p>
                  <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg text-gray-700">Email: bcegovbuilders.com</p>
                </div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default TermsOfService





import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PrivacyPolicy = () => {
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
              Privacy Policy
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
                  1. Introduction
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  BCE Construction Inc ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  2. Information We Collect
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  We may collect information about you in various ways. The information we may collect includes:
                </p>
                <ul className="list-disc list-inside space-y-2 xs:space-y-2 sm:space-y-3 text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg ml-4 xs:ml-4 sm:ml-6">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Business information (company name, job title)</li>
                  <li>Technical data (IP address, browser type, operating system)</li>
                  <li>Usage data (pages visited, time spent on site)</li>
                  <li>Contact information when you fill out forms on our website</li>
                </ul>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  3. How We Use Your Information
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 xs:space-y-2 sm:space-y-3 text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg ml-4 xs:ml-4 sm:ml-6">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                  <li>Process transactions and send related information</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Detect, prevent, and address technical issues</li>
                </ul>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  4. Information Sharing and Disclosure
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  We do not sell, trade, or rent your personal information to others. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 xs:space-y-2 sm:space-y-3 text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg ml-4 xs:ml-4 sm:ml-6">
                  <li>With service providers who assist us in operating our website and conducting our business</li>
                  <li>To comply with legal obligations or respond to lawful requests</li>
                  <li>To protect our rights, privacy, safety, or property</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  5. Data Security
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  6. Your Rights
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 xs:space-y-2 sm:space-y-3 text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg ml-4 xs:ml-4 sm:ml-6">
                  <li>Access and receive a copy of your personal data</li>
                  <li>Rectify inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to processing of your personal data</li>
                  <li>Request restriction of processing</li>
                  <li>Data portability</li>
                </ul>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  7. Cookies
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, though this may affect the functionality of the site.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  8. Changes to This Privacy Policy
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="space-y-4 xs:space-y-4 sm:space-y-5"
              >
                <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-secondary">
                  9. Contact Us
                </h2>
                <p className="text-xs xs:text-xs sm:text-sm md:text-base lg:text-base xl:text-lg leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy


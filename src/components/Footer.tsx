import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about', isHash: true },
      { name: 'Services', href: '#services', isHash: true },
      { name: 'Projects', href: '#projects', isHash: true },
      { name: 'Certifications', href: '#certifications', isHash: true },
    ],
    resources: [
      { name: 'Contact', href: '#contact', isHash: true },
      { name: 'Privacy Policy', href: '/privacy-policy', isHash: false },
      { name: 'Terms of Service', href: '/terms-of-service', isHash: false },
      { name: 'Careers', href: '/careers', isHash: false },
    ],
  }

  // const socialLinks = [
  //   { name: 'Facebook', icon: '📘', href: '#' },
  //   { name: 'Twitter', icon: '🐦', href: '#' },
  //   { name: 'LinkedIn', icon: '💼', href: '#' },
  //   { name: 'Instagram', icon: '📷', href: '#' },
  // ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-2 xs:px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 xl1:px-12 xl2:px-16 py-8 xs:py-8 sm:py-10 md:py-12 lg:py-12 xl:py-14">
        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 grid-cols-4 gap-6 xs:gap-6 sm:gap-7 md:gap-8 lg:gap-8 xl:gap-10 mb-6 xs:mb-6 sm:mb-7 md:mb-8 lg:mb-8 xl:mb-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-3 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5">
              {/* <div className="w-8 xs:w-8 sm:w-9 md:w-10 lg:w-10 xl:w-12 h-8 xs:h-8 sm:h-9 md:h-10 lg:h-10 xl:h-12 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-base xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl">BCE</span>
              </div>
              <span className="font-bold text-base xs:text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-white">Gov Builders</span> */}
              <img src="/images/bce_logo_w.png" alt="bce_logo" />
            </div>
            <p className="xs:text-xs sm:text-sm md:text-sm text-base text-gray-400 mb-3 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5">
              Providing Professional Workforce Management to Ensure Your Projects Run Smoothly, on Time, and Within Budget
            </p>
            {/* <div className="flex space-x-3 xs:space-x-3 sm:space-x-3 md:space-x-4 lg:space-x-4 xl:space-x-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-xl xs:text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl hover:text-secondary transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-bold text-base xs:text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl xl1:text-xl xl2:text-2xl mb-3 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5">Company</h3>
            <ul className="space-y-2 xs:space-y-2 sm:space-y-2 md:space-y-2 lg:space-y-2 xl:space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.isHash ? (
                    <a
                      href={link.href}
                      className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base xl1:text-lg xl2:text-lg hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base xl1:text-lg xl2:text-lg hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-bold xs:text-base sm:text-base md:text-base text-lg mb-3 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5">Resources</h3>
            <ul className="space-y-2 xs:space-y-2 sm:space-y-2 md:space-y-2 lg:space-y-2 xl:space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  {link.isHash ? (
                    <a
                      href={link.href}
                      className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base xl1:text-lg xl2:text-lg hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base xl1:text-lg xl2:text-lg hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-bold xs:text-base sm:text-base md:text-base text-lg mb-3 xs:mb-3 sm:mb-3 md:mb-4 lg:mb-4 xl:mb-5">Contact</h3>
            <ul className="space-y-2 xs:space-y-2 sm:space-y-2 md:space-y-2 lg:space-y-2 xl:space-y-3 text-gray-400">
              <li><div className="flex items-center gap-x-2 text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base xl1:text-lg xl2:text-lg"><img src="/images/mail_icon.png" alt="mailto" className="w-4 xs:w-3 sm:w-3 h-4 xs:h-3 sm:h-3 object-contain" /> bcegovbuilders.com</div></li>
              <li><div className="flex items-center gap-x-2 text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base xl1:text-lg xl2:text-lg"><img src="/images/call_icon.png" alt="callto" className="w-4 xs:w-3 sm:w-3 h-4 xs:h-3 sm:h-3 object-contain" /> (480) 770-6555</div></li>
              <li><div className="flex items-center gap-x-2 text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base xl1:text-lg xl2:text-lg"><img src="/images/address_icon.png" alt="addressto" className="w-4 xs:w-3 sm:w-3 h-4 xs:h-3 sm:h-3 object-contain" />18444 N. 25th Avenue Suite 420, Phoenix, AZ 85023, USA</div></li>
              <li></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 pt-6 xs:pt-6 sm:pt-6 md:pt-7 lg:pt-8 xl:pt-10 mt-6 xs:mt-6 sm:mt-6 md:mt-7 lg:mt-8 xl:mt-10 text-center text-gray-400"
        >
          <p className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base xl1:text-lg xl2:text-lg">
            © {currentYear} BCE Construction Inc, All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer


import React from 'react'
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

const ContactInfo: React.FC = () => {
  const contactInfoClass = 'dark:text-gray-300 dark:group-hover:text-white text-gray-600 group-hover:text-gray-900'

  const iconClass = `w-5 h-5 dark:text-gray-400 text-gray-500'} group-hover:text-indigo-500 transition-colors duration-300`

  const socialIconClass = `w-5 h-5 transition-all duration-300 dark: text-gray-400 dark:hover:text-white text-gray-500 hover:text-indigo-600'
  }`

  return (
    <div className={`text-gray-800'} flex h-full flex-col p-6 dark:text-gray-200`}>
      <h2 className="mb-6 text-2xl font-semibold">Get in Touch</h2>

      <div className="mb-8 space-y-4">
        <div className="group flex items-start">
          <div className="mr-4 mt-1">
            <MapPin className={iconClass} />
          </div>
          <div>
            <h3 className={`text-gray-800'} font-medium dark:text-gray-200`}>Visit Us</h3>
            <p className={contactInfoClass}>
              123 Education Street
              <br />
              Learning District
              <br />
              Tech City, TC 12345
            </p>
          </div>
        </div>

        <div className="group flex items-start">
          <div className="mr-4 mt-1">
            <Phone className={iconClass} />
          </div>
          <div>
            <h3 className={`text-gray-800'} font-medium dark:text-gray-200`}>Call Us</h3>
            <p className={contactInfoClass}>
              <a href="tel:+11234567890" className="transition-all hover:underline">
                +1 (123) 456-7890
              </a>
            </p>
          </div>
        </div>

        <div className="group flex items-start">
          <div className="mr-4 mt-1">
            <Mail className={iconClass} />
          </div>
          <div>
            <h3 className={`text-gray-800'} font-medium dark:text-gray-200`}>Email Us</h3>
            <p className={contactInfoClass}>
              <a href="mailto:info@edtechplatform.com" className="transition-all hover:underline">
                info@edtechplatform.com
              </a>
            </p>
          </div>
        </div>

        <div className="group flex items-start">
          <div className="mr-4 mt-1">
            <Clock className={iconClass} />
          </div>
          <div>
            <h3 className={`text-gray-800'} font-medium dark:text-gray-200`}>Hours</h3>
            <p className={contactInfoClass}>
              Monday - Friday: 9am - 6pm
              <br />
              Saturday: 10am - 4pm
              <br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <h3 className={`text-gray-700'} mb-3 font-medium dark:text-gray-300`}>Connect With Us</h3>
        <div className="flex space-x-4">
          <a href="#" aria-label="LinkedIn" className="transition-transform hover:scale-110">
            <Linkedin className={socialIconClass} />
          </a>
          <a href="#" aria-label="Twitter" className="transition-transform hover:scale-110">
            <Twitter className={socialIconClass} />
          </a>
          <a href="#" aria-label="Facebook" className="transition-transform hover:scale-110">
            <Facebook className={socialIconClass} />
          </a>
          <a href="#" aria-label="Instagram" className="transition-transform hover:scale-110">
            <Instagram className={socialIconClass} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo

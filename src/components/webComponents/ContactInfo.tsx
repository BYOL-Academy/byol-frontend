import React from 'react'
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

const ContactInfo: React.FC = () => {
  const contactInfoClass = 'dark:text-gray-300 dark:group-hover:text-white text-gray-600 group-hover:text-gray-900'

  const iconClass = `w-5 h-5 dark:text-gray-400 text-gray-500'} group-hover:text-indigo-500 transition-colors duration-300`

  const socialIconClass = `w-5 h-5 transition-all duration-300 dark: text-gray-400 dark:hover:text-white text-gray-500 hover:text-indigo-600'
  }`

  return (
    <div className={`p-6 h-full flex flex-col dark:text-gray-200 text-gray-800'}`}>
      <h2 className='text-2xl font-semibold mb-6'>Get in Touch</h2>

      <div className='space-y-4 mb-8'>
        <div className='group flex items-start'>
          <div className='mt-1 mr-4'>
            <MapPin className={iconClass} />
          </div>
          <div>
            <h3 className={`font-medium dark:text-gray-200 text-gray-800'}`}>Visit Us</h3>
            <p className={contactInfoClass}>
              123 Education Street
              <br />
              Learning District
              <br />
              Tech City, TC 12345
            </p>
          </div>
        </div>

        <div className='group flex items-start'>
          <div className='mt-1 mr-4'>
            <Phone className={iconClass} />
          </div>
          <div>
            <h3 className={`font-medium dark:text-gray-200 text-gray-800'}`}>Call Us</h3>
            <p className={contactInfoClass}>
              <a href='tel:+11234567890' className='hover:underline transition-all'>
                +1 (123) 456-7890
              </a>
            </p>
          </div>
        </div>

        <div className='group flex items-start'>
          <div className='mt-1 mr-4'>
            <Mail className={iconClass} />
          </div>
          <div>
            <h3 className={`font-medium dark:text-gray-200 text-gray-800'}`}>Email Us</h3>
            <p className={contactInfoClass}>
              <a href='mailto:info@edtechplatform.com' className='hover:underline transition-all'>
                info@edtechplatform.com
              </a>
            </p>
          </div>
        </div>

        <div className='group flex items-start'>
          <div className='mt-1 mr-4'>
            <Clock className={iconClass} />
          </div>
          <div>
            <h3 className={`font-medium dark:text-gray-200 text-gray-800'}`}>Hours</h3>
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

      <div className='mt-auto'>
        <h3 className={`font-medium mb-3 dark:text-gray-300 text-gray-700'}`}>Connect With Us</h3>
        <div className='flex space-x-4'>
          <a href='#' aria-label='LinkedIn' className='hover:scale-110 transition-transform'>
            <Linkedin className={socialIconClass} />
          </a>
          <a href='#' aria-label='Twitter' className='hover:scale-110 transition-transform'>
            <Twitter className={socialIconClass} />
          </a>
          <a href='#' aria-label='Facebook' className='hover:scale-110 transition-transform'>
            <Facebook className={socialIconClass} />
          </a>
          <a href='#' aria-label='Instagram' className='hover:scale-110 transition-transform'>
            <Instagram className={socialIconClass} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo

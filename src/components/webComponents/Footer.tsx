'use client'
import { Image } from '@heroui/react'
import ByolDarkLogo from '../../public/images/BYOL-orange.svg'
import ByolLogo from '../../public/images/BYOL-orange.svg'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <footer className={`bg-white shadow-small dark:bg-black ${pathname === '/' ? '' : 'hidden'}`}>
      <div className='mx-auto max-w-7xl px-6 py-10 2xl:px-0'>
        <div className='flex flex-col items-start justify-between gap-8 md:flex-row md:items-center md:gap-0'>
          <div>
            <Link to='/' className='flex'>
              <Image src={ByolLogo} alt='Byol React' width='130' height='53' className='block dark:hidden' />
              <Image src={ByolDarkLogo} alt='Byol React' width='130' height='53' className='hidden dark:block' />
            </Link>
            <p className='max-w-lg text-body-4 font-normal text-metal-600 dark:text-metal-300'>BYOL - Be Your Own Light</p>
          </div>
          {/* Popular Exams  */}
          <div>
            <h4 className='mb-3 text-body-3 font-medium text-metal-900 dark:text-white'>Popular Exams</h4>
            <ul className='flex flex-col gap-3 text-body-3 font-normal text-metal-600 dark:text-metal-300'>
              <li>
                <Link className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1' to='https://x.com/byolacademy' target='_blank'>
                  UPSC
                </Link>
              </li>
              <li>
                <Link className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1' to='https://x.com/byolacademy' target='_blank'>
                  IIT JEE
                </Link>
              </li>
              <li>
                <Link className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1' to='https://x.com/byolacademy' target='_blank'>
                  NDA
                </Link>
              </li>
              <li>
                <Link className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1' to='https://x.com/byolacademy' target='_blank'>
                  NEET
                </Link>
              </li>
              <li>
                <Link className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1' to='https://x.com/byolacademy' target='_blank'>
                  GATE
                </Link>
              </li>
            </ul>
          </div>
          {/* Resource  */}
          <div>
            <h4 className='mb-3 text-body-3 font-medium text-metal-900 dark:text-white'>Resource</h4>
            <ul className='flex flex-col gap-3 text-body-3 font-normal text-metal-600 dark:text-metal-300'>
              <li>
                <Link className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1' to='https://x.com/byolacademy' target='_blank'>
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1'
                  to='https://www.linkedin.com/company/byol-academy/'
                  target='_blank'
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1'
                  to='https://youtube.com/@byolacademy?si=2Qg5G1TYKOQ1yrkA'
                  target='_blank'
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1'
                  to='https://www.facebook.com/people/BYOL-Academy/61571235605750/'
                  target='_blank'
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1'
                  to='https://www.instagram.com/academybyol/profilecard/'
                  target='_blank'
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
          {/* Company  */}
          <div>
            <h4 className='mb-3 text-body-3 font-medium text-metal-900 dark:text-white'>Company</h4>
            <ul className='flex flex-col gap-3 text-body-3 font-normal text-metal-600 dark:text-metal-300'>
              <li>
                <Link className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1' to='/about' target='_blank'>
                  About Us
                </Link>
              </li>
              <li>
                <Link className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1' to='https://x.com/byolacademy' target='_blank'>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1'
                  to='https://www.linkedin.com/company/byol-academy/jobs/'
                  target='_blank'
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1' to='https://x.com/byolacademy' target='_blank'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className='inline-block text-body-4 font-normal transition-all duration-300 hover:translate-x-1' to='https://x.com/byolacademy' target='_blank'>
                  Terms of use
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='border-t border-t-metal-100 py-5 text-center dark:border-t-metal-600'>
        <p className='text-body-4 font-normal text-metal-600 dark:text-metal-300'>
          &copy;{new Date().getFullYear()} All Rights Reserved by &nbsp;
          <Link to='https://byolacademy.com/' target='_blank' className='font-medium'>
            BYOL Academy
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer

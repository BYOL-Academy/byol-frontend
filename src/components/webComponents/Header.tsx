'use client'
import { Image } from '@heroui/react'
import { List, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import ByolDarkLogo from '../../public/images/BYOL-orange.svg'
import ByolLogo from '../../public/images/BYOL-orange.svg'
import { gettingStartedRoutes, navbarRoutes, routes } from './webSrc/routes/routes'
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
  buttonVariants,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  VisuallyHidden,
} from './webSrc'
import { cn } from './webSrc//utils/cn'
import SearchBar from './SearchBar'
import ThemeSwitcher from './ThemeSwitcher'
import { Linkedin } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const pathname = location.pathname
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(false)
  }, [pathname])

  const IsActive = (str: string) => {
    const lastPart = pathname.toLowerCase().split('/').pop()
    const strPart = str.toLowerCase().split('/').pop()
    return strPart === lastPart
  }
  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-white dark:border-metal-800 ${
        pathname === '/' ? 'border-b-metal-100 dark:border-b-metal-900 dark:bg-[#0D1015]' : 'border-b-transparent dark:border-b-transparent dark:bg-metal-900'
      }`}
    >
      <div className='relative mx-auto max-w-7xl px-6 2xl:px-0'>
        <nav className='flex items-center justify-between py-0'>
          <div className='flex items-center space-x-28'>
            <Link to='/' className='flex'>
              <Image src={ByolLogo} alt='Byol React' width='80' height='40' className='block dark:hidden' />
              <Image src={ByolDarkLogo} alt='Byol React' width='80' height='40' className='hidden dark:block' />
            </Link>
            <div className='hidden laptop:ml-auto laptop:flex laptop:items-center laptop:space-x-10'>
              {navbarRoutes.map((nav: any) => (
                <Link
                  key={nav.id}
                  to={nav.href}
                  target={nav.redirect ? '_blank' : '_self'}
                  className={`text-body-4 font-medium text-metal-600 hover:text-primary-500 active:text-primary-500 dark:text-metal-300 dark:active:text-white ${
                    nav.name === 'Documentation' && pathname.includes('/docs/') ? 'text-primary-500 dark:text-white' : ''
                  } ${nav.name === 'Blog' && pathname === '/blog' ? 'text-primary-500 dark:text-white' : ''}`}
                >
                  {nav.name}
                </Link>
              ))}
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <SearchBar />
            <Link
              to='https://www.linkedin.com/company/byol-academy/'
              target='_blank'
              className='rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900'
            >
              <Linkedin size={22} className='block text-sky-900 dark:hidden' />
              <Image src='/images/icon/github-dark.svg' height={22} width={22} alt='github' className='hidden dark:block' />
            </Link>
            <Link
              to='https://discord.gg/'
              target='_blank'
              className='rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900'
            >
              <Image src='/images/icon/discord.svg' height={22} width={22} alt='discord' />
            </Link>
            <ThemeSwitcher />
            <button
              onClick={() => setActive(!active)}
              className='rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 laptop:hidden dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900'
            >
              {active ? (
                <span>
                  <X size={20} className='text-metal-900 dark:text-white' />
                </span>
              ) : (
                <span>
                  <List size={20} className='text-metal-900 dark:text-white' />
                </span>
              )}
            </button>
            <Link to='/' className={cn(buttonVariants({ color: 'secondary' }), 'hidden sm:block')}>
              get started
            </Link>
            <Drawer showCloseIcon={false} onOpenChange={setActive} open={active}>
              <DrawerContent position='right' className='w-full space-y-3 overflow-auto rounded-none p-6 md:w-1/2 laptop:hidden'>
                <DrawerClose asChild className='absolute right-2 top-2'>
                  <button className='cursor-pointer'>
                    <X size={16} className='text-metal-900 dark:text-white' />
                  </button>
                </DrawerClose>
                <VisuallyHidden>
                  <DrawerTitle />
                  <DrawerDescription />
                </VisuallyHidden>
                <Accordion collapsible type='single' flush defaultValue='getting-started'>
                  <AccordionItem value='getting-started' className='border-b-0'>
                    <AccordionAction className='px-0 py-0'>
                      <AccordionTitle className='text-body-4 font-semibold text-metal-900 dark:text-white'>Getting Started</AccordionTitle>
                    </AccordionAction>
                    <AccordionContent className='p-0'>
                      <ul className='mt-3 space-y-1.5 border-l border-l-metal-100 dark:border-l-metal-800'>
                        {gettingStartedRoutes.map((route: any) => (
                          <li key={route.id}>
                            <Link
                              className={`-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 dark:text-metal-400 dark:hover:border-white dark:hover:text-white ${
                                IsActive(route.href)
                                  ? 'border-l !border-primary-500 text-primary-500 transition-colors duration-150 hover:text-primary-500 dark:!border-white dark:text-white dark:hover:text-white'
                                  : ''
                              }`}
                              to={route.href}
                            >
                              {route.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion collapsible type='single' flush defaultValue='components'>
                  <AccordionItem className='border-b-0' value='components'>
                    <AccordionAction className='px-0 py-0'>
                      <AccordionTitle className='text-body-4 font-semibold text-metal-900 dark:text-white'>Components</AccordionTitle>
                    </AccordionAction>
                    <AccordionContent className='p-0'>
                      <ul className='mt-3 space-y-1.5 border-l border-l-metal-100 dark:border-l-metal-800'>
                        {routes.map((route: any) => (
                          <li key={route.id}>
                            <Link
                              className={`-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 dark:text-metal-400 dark:hover:border-white dark:hover:text-white ${
                                IsActive(route.href)
                                  ? 'border-l !border-primary-500 text-primary-500 transition-colors duration-150 hover:text-primary-500 dark:!border-white dark:text-white dark:hover:text-white'
                                  : ''
                              }`}
                              to={route.href}
                            >
                              {route.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </DrawerContent>
            </Drawer>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header

'use client'
import { Image } from '@heroui/react'
import { FC } from 'react'
import ByolDarkLogo from '../../public/images/keep-dark.svg'
import { Link } from 'react-router-dom'

export interface BlogProps {
  [key: string]: any
}

const Blog: FC<BlogProps> = ({ title, date, tag, slug, version }) => {
  return (
    <div className='space-y-2.5'>
      <Link to={`/blog/${slug}`} className='blog-post relative flex h-[200px] w-full flex-col items-center justify-center gap-2 rounded-xl border border-metal-800 bg-[#0D1015]'>
        <Image src={ByolDarkLogo} alt='Byol React' width='100' height='40' />
        <p className='text-body-2 font-semibold text-white'>{version}</p>
      </Link>
      <div className='space-y-2.5'>
        <p className='text-body-5 text-primary-500'>{tag}</p>
        <div className='flex items-center justify-between'>
          <Link to={`/blog/${slug}`} className='cursor-pointer text-body-3 text-metal-900 dark:text-white dark:hover:text-primary-500'>
            {title}
          </Link>
          <p className='text-body-4 text-metal-600 dark:text-metal-300'>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default Blog

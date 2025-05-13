import { Image } from '@heroui/react'
import ByolDarkLogo from '../../public/images/keep-dark.svg'

const BlogHeader = ({ title }: { title: string }) => {
  return (
    <div className='blog-post relative mb-6 flex h-[200px] w-full flex-col items-center justify-center gap-2 rounded-xl border border-metal-800 bg-[#0D1015] lg:h-[300px]'>
      <Image src={ByolDarkLogo} alt='Byol React' width='130' height='55' />
      <h1 className='text-heading-6 font-semibold text-white lg:text-heading-4'>{title}</h1>
    </div>
  )
}

export default BlogHeader

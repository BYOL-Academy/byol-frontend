import React from 'react'
import { Award, Users, Target, BookOpen, CheckCircle, TrendingUp } from 'lucide-react'
import Ishrat from '../../../public/img/avatars/Ishrat Kashafi.png'
import Saurabh from '../../../public/img/avatars/Saurabh Singh.jpg'
import Nigmendra from '../../../public/img/avatars/Nigmendra Singh.jpg'
import Yuvraj from '../../../public/img/avatars/Yuvraj Singh.jpg'
import Samar from '../../../public/img/avatars/Samar Anand Singh.jpg'
import Mujhahid from '../../../public/img/avatars/Mujhahid Hussain.png'
import { Image } from '@heroui/react'
const page: React.FC = () => {
  const teamMembers = [
    {
      name: 'Yuvraj Singh',
      role: 'Director',
      image: Yuvraj,
      expertise: '',
    },
    {
      name: 'Saurabh Singh',
      role: 'Director',
      image: Saurabh,
      expertise: '',
    },
    {
      name: 'Ishrat Kashafi',
      role: 'Co-founder & COO',
      image: Ishrat,
      expertise: '',
    },
    {
      name: 'Nigmendra Singh',
      role: 'Member',
      image: Nigmendra,
      expertise: '',
    },
    {
      name: 'Samar Anand Singh',
      role: 'Member',
      image: Samar,
      expertise: '',
    },
    // {
    //   name: 'Shubham Tiwari',
    //   role: 'Member',
    //   image: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg',
    //   expertise: 'Ex-Army Officer, CDS Expert',
    // },
    {
      name: 'Mujahid Hussain',
      role: 'Manager',
      image: Mujhahid,
      expertise: '',
    },
  ]

  const achievements = [
    {
      number: '50,000+',
      text: 'Students Enrolled',
      icon: Users,
    },
    {
      number: '1000+',
      text: 'Selections in Various Services',
      icon: Award,
    },
    {
      number: '95%',
      text: 'Success Rate',
      icon: Target,
    },
  ]

  return (
    <section>
      <div className='-mt-2 py-20 '>
        <div className='mx-auto max-w-7xl px-6 2xl:px-0'>
          <div className='max-w-md space-y-3'>
            <h1 className='text-heading-5 font-semibold text-metal-900 dark:text-white'>Empowering India&apos;s Future Leaders</h1>
            <p className='mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-400'>Shaping the next generation of civil servants through innovative learning solutions.</p>
          </div>

          {/* Mission & Vision */}
          <div className='mb-16 mt-8 grid gap-8 md:grid-cols-2'>
            <div className='rounded-xl bg-white p-8 shadow-lg dark:bg-zinc-800'>
              <div className='mb-4 flex items-center'>
                <Target className='mr-3 h-8 w-8 text-indigo-600 dark:text-indigo-400' />
                <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>Our Mission</h2>
              </div>
              <p className='text-gray-600 dark:text-gray-400'>Providing quality education for civil service aspirants through technology and expert guidance.</p>
            </div>
            <div className='rounded-xl bg-white p-8 shadow-lg dark:bg-zinc-800'>
              <div className='mb-4 flex items-center'>
                <BookOpen className='mr-3 h-8 w-8 text-indigo-600 dark:text-indigo-400' />
                <h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>Our Vision</h2>
              </div>
              <p className='text-gray-600 dark:text-gray-400'>To be India&apos;s leading platform for government service exam preparation.</p>
            </div>
          </div>

          {/* Achievements */}
          <div className='mb-16'>
            <div className='grid gap-8 md:grid-cols-3'>
              {achievements.map((achievement, index) => (
                <div key={index} className='rounded-xl bg-white p-8 text-center shadow-lg dark:bg-zinc-800'>
                  <achievement.icon className='mx-auto mb-4 h-12 w-12 text-indigo-600 dark:text-indigo-400' />
                  <h3 className='mb-2 text-3xl font-bold text-gray-800 dark:text-gray-200'>{achievement.number}</h3>
                  <p className='text-gray-600 dark:text-gray-400'>{achievement.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className='mb-16'>
            <h2 className='mb-8 text-center text-3xl font-bold text-gray-800 dark:text-gray-200'>Our Approach</h2>
            <div className='grid gap-8 md:grid-cols-3'>
              <div className='rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-800'>
                <CheckCircle className='mb-4 h-8 w-8 text-indigo-600 dark:text-indigo-400' />
                <h3 className='mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200'>Comprehensive Coverage</h3>
                <p className='text-gray-600 dark:text-gray-400'>Complete syllabus with detailed materials and updates</p>
              </div>
              <div className='rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-800'>
                <Users className='mb-4 h-8 w-8 text-indigo-600 dark:text-indigo-400' />
                <h3 className='mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200'>Expert Guidance</h3>
                <p className='text-gray-600 dark:text-gray-400'>Learn from experienced civil servants and experts</p>
              </div>
              <div className='rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-800'>
                <TrendingUp className='mb-4 h-8 w-8 text-indigo-600 dark:text-indigo-400' />
                <h3 className='mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200'>Performance Tracking</h3>
                <p className='text-gray-600 dark:text-gray-400'>Advanced analytics with personalized feedback</p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div>
            <h2 className='mb-8 text-center text-3xl font-bold text-gray-800 dark:text-gray-200'>Our Founding Team</h2>
            <div className='grid gap-8 md:grid-cols-3'>
              {teamMembers.map((member, index) => (
                <div key={index} className='transform overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-105 dark:bg-zinc-800'>
                  <Image src={member.image} alt={member.name} className='h-64 w-full object-cover' />
                  <div className='p-6'>
                    <h3 className='mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200'>{member.name}</h3>
                    <p className='mb-2 font-medium text-indigo-600 dark:text-indigo-400'>{member.role}</p>
                    {/* <p className='text-sm text-gray-600 dark:text-gray-400'>{member.expertise}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page

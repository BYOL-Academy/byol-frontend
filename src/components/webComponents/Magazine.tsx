import React from 'react'
import { Newspaper } from 'lucide-react'
// interface Release {
//   type: 'book' | 'course'
//   title: string
//   author: string
//   image: string
//   price: string
//   tag: string
// }

const Magazine: React.FC = () => {
  // const newReleases: Release[] = [
  //   {
  //     type: 'book',
  //     title: 'Advanced Machine Learning',
  //     author: 'Dr. Sarah Chen',
  //     image: 'https://byolacademy.com/wp-content/uploads/2025/05/image-1.jpg',
  //     price: '$49.99',
  //     tag: 'Bestseller',
  //   },
  //   {
  //     type: 'course',
  //     title: 'Web Development Masterclass',
  //     author: 'John Smith',
  //     image:
  //       'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     price: '$89.99',
  //     tag: 'New',
  //   },
  //   {
  //     type: 'book',
  //     title: 'Data Science Fundamentals',
  //     author: 'Michael Johnson',
  //     image:
  //       'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  //     price: '$39.99',
  //     tag: 'Featured',
  //   },
  // ]

  return (
    <section className="community py-20">
      <div className="mx-auto max-w-7xl px-6 py-6 2xl:px-0"></div>
      <div className="w-full rounded-xl bg-white p-8 dark:bg-zinc-800">
        {/* Magazine Section */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Latest Magazine</h2>
            <div className="flex items-center space-x-2">
              <Newspaper className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-gray-700 md:grid-cols-2 dark:text-gray-300">
            {/* Magazine Preview */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://byolacademy.com/wp-content/uploads/2025/05/image-1.jpg"
                alt="Magazine Cover"
                className="w-50 h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/70 p-4 backdrop-blur-sm dark:bg-black/70">
                <h3 className="mb-2 text-xl font-semibold">SAADHAK</h3>
                <p className="text-sm">Crack UPSC PRELIMS 2025 Like a SAADHAK</p>
              </div>
            </div>

            {/* QR Code and Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="rounded-lg bg-gray-100 p-6 dark:bg-zinc-700">
                <h3 className="mb-4 text-xl font-semibold">Scan to Read Online</h3>
                <div className="flex items-center space-x-4">
                  {/* <QrCode className='w-32 h-32' /> */}
                  <img
                    src="https://byolacademy.com/wp-content/uploads/2025/05/qr.png"
                    alt="Magazine Cover"
                    className="h-20 w-20 object-cover"
                  />
                  <div>
                    <p className="mb-2">Access our digital edition instantly</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Scan with your mobile device to read the latest issue
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-gray-100 p-6 dark:bg-zinc-700">
                <h4 className="mb-2 font-semibold">In This Edition:</h4>
                <ul className="space-y-2">
                  <li>• Future of Online Learning</li>
                  <li>• AI in Education</li>
                  <li>• Student Success Stories</li>
                  <li>• Industry Insights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* New Releases Section */}
        {/* <div>
          <h2 className='text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200'>New Releases</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {newReleases.map((release, index) => (
              <div key={index} className='rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105 bg-white dark:bg-zinc-700'>
                <div className='relative'>
                  <img src={release.image} alt={release.title} className='w-full h-48 object-cover' />
                  <div className='absolute top-2 right-2 px-3 py-1 rounded-full text-sm bg-indigo-100 dark:bg-indigo-600 text-indigo-700 dark:text-white'>{release.tag}</div>
                  {release.type === 'book' ? (
                    <Book className='absolute bottom-2 left-2 w-6 h-6 text-gray-800 dark:text-white' />
                  ) : (
                    <GraduationCap className='absolute bottom-2 left-2 w-6 h-6 text-gray-800 dark:text-white' />
                  )}
                </div>
                <div className='p-4'>
                  <h3 className='text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200'>{release.title}</h3>
                  <p className='text-sm mb-2 text-gray-600 dark:text-gray-400'>by {release.author}</p>
                  <p className='font-bold text-indigo-600 dark:text-indigo-400'>{release.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Magazine

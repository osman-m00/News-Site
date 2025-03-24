import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white mb-7">
      <div className="border border-white bg-red-500 h-30 px-6 flex items-center">
        <div className='w-15 h-15 mr-auto hover:w-17 hover:h-17 transition-all duration-200'>
          <img src="/globe.png" alt="news-icon" />
        </div>
        <nav className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex space-x-19 text-white">
            <li className='hover:text-black hover:text-lg transition-all duration-200 hover:underline'><a href="">Top Stories</a></li>
            <li className='hover:text-black hover:text-lg transition-all duration-200 hover:underline'><a href="">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

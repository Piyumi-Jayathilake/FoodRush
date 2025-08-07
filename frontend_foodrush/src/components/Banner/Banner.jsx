import React, { useState } from 'react'
import { FaDownload, FaPlay, FaSearch } from 'react-icons/fa';
import {bannerAssets} from '../../assets/dummydata'


const Banner = () => {

  const [searchQuery,setSearchQuery] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const {bannerImage} = bannerAssets;

  const handleSearch = () =>{
    e.preventDefault();
    console.log('Searching for: ',searchQuery);
  }
  return (
    <div className='relative'>
      <div className='bg-gradient-to-br from-[#ffffff] via-[#fbfffb] to-[#fafbfa] text-[#58c504] 
      py-16 px-4 sm:px-8 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-[#ffffff] to-[#fafbfa]'/>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10'>
          {/*Left Content */}
          <div className='flex-1 space-y-8 relative md:pr-19 text-center md:text-left'>
            <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold leading-tight font-serif
            drop-shadow-md'>
              Serve Fresh <br/>
              <span className='text-[#21800e] bg-gradient-to-r from-[#048b0b] to-[#048b0b] bg-clip-text'>
                Delivered with Love
              </span>
            </h1>
            <p className='text-lg md:text-lg lg:text-xl font-thin italic sm:text-xl text-[#21800e]
            max-w-xl opacity-90 mx-auto md:mx-0'>
              Top chefs in the kitchen, speed champs on the road - all working to get your favorite meals to you hot and tasty, 
              in just 60 minutes. Because you deserve great food, fast.
            </p>
           
            <form onSubmit={handleSearch} className='relative max-w-2xl mx-auto md:mx-0 group'>
              <div className='relative flex items-center bg-[#ffffff] rounded-xl border-2 border-[#04720b]
              shadow-2xl hover:bg-[#c6f486] transition-all duration-300'>
                <div className='pl-6 pr-3 py-4'>
                  <FaSearch className='text-xl text-[#21800e]'/>
                </div>
                <input type='text' value={searchQuery} onChange={() => setSearchQuery(e.target.value)}
                placeholder='Pick your next favourite meal... and dig in.'
                className='w-full py-4 pr-6 bg-transparent outline-none placeholder-[#21800e] text-md
                font-medium tracking-wide' />
                <button type='submit' className='mr-4 px-6 py-3 bg-gradient-to-r from-[#048b0b] to-[#04720b]
                rounded-lg font-semibold text-[#d6f6c4] hover:from-[#4ae02c] hover:to-[#17c703]
                transition-all duration-300 shadow-lg hover:shadow-amber-300/20'>
                  Search
                </button>
              </div>
            </form>
            <div className='flex flex-wrap gap-4 justify-center md:justify-start mt-6'>
              <button className='group flex items-center gap-3 bg-gradient-to-r from-[#048b0b] to-[#04720b] hover:from-[#4ae02c] hover:to-[#17c703] px-6
              py-3 rounded-xl transition-all duration-300 hover:border-[#447204] backdrop-blur-sm'>
                <FaDownload className='text-xl text-[#d6f6c4] group-hover:animate-bounce'/>
                <span className='text-lg text-[#d6f6c4] font-semibold'>Download App</span>
              </button>
              <button onClick={() => setShowVideo(true)} className='group flex items-center gap-3  bg-gradient-to-r from-[#048b0b] to-[#04720b]
               hover:from-[#4ae02c] hover:to-[#17c703] px-6 py-3 rounded-xl transition-all duration-300 shadow-lg
               hover:shadow-amber-300/20'>
                <FaPlay className='text-xl text-[#d6f6c4]'/>
                <span className='text-lg text-[#d6f6c4] font-semibold'>Watch Video</span>
               </button>
            </div>
          </div>
          {/* Right Section Image */}
          <div className='flex-1 relative group mt-8 md:mt-0 min-h-[300px] sm-min-h-[400px]'>
            {/*Main Image */}
            <div className='relative rounded-full p-1 bg-gradient-to-br from-[#048b0b] to-[#04720b]
            shadow-2xl z-20 w-[400px] xs:w-[450px] sm:w-[500px] h-[400px] xs:h-[450px] sm:h-[500px] mx-auto'>
              <img src={bannerImage} alt='Bannr' className='rounded-full border-4 xs:border-8 border-amber-900/50
              w-full h-full object-cover object-top'/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Banner
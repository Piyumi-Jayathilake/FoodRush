import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';


const Banner = () => {
  const [searchQuery,setSearchQuery] = useState('');
  const handleSearch = () =>{
    e.preventDefault();
    console.log('Searching for: ',searchQuery);
  }
  return (
    <div className='relative'>
      <div className='bg-gradient-to-br from-[#4cf452] via-[#048b0b] to-[#048b0b] text-amber-100 
      py-16 px-4 sm:px-8 relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-[#048b0b]/20 to-[#048b0b]/10'/>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10'>
          {/*Left Content */}
          <div className='flex-1 space-y-8 relative md:pr-19 text-center md:text-left'>
            <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-bold leading-tight font-serif
            drop-shadow-md'>
              Serve Fresh <br/>
              <span className='text-amber-200 bg-gradient-to-r from-[#048b0b] to-[#048b0b] bg-clip-text'>
                Delivered with Love
              </span>
            </h1>
            <p className='text-lg md:text-lg lg:text-xl font-thin italic sm:text-xl text-amber-100
            max-w-xl opacity-90 mx-auto md:mx-0'>
              Top chefs in the kitchen, speed champs on the road - all working to get your favorite meals to you hot and tasty, 
              in just 60 minutes. Because you deserve great food, fast.
            </p>
           
            <form onSubmit={handleSearch} className='relative max-w-2xl mx-auto md:mx-0 group'>
              <div className='relative flex items-center bg-[#077e0d] rounded-xl border-2 border-[#04720b]
              shadow-2xl hover:[#048b0b]/50 transition-all duration-300'>
                <div className='pl-6 pr-3 py-4'>
                  <FaSearch className='text-xl text-amber-200/70'/>
                </div>
                <input type='text' value={searchQuery} onChange={() => setSearchQuery(e.target.value)}
                placeholder='Pick your next favourite meal... and dig in.'
                className='w-full py-4 pr-6 bg-transparent outline-none placeholder-amber-200/70 text-lg
                font-medium tracking-wide' />
              </div>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Banner
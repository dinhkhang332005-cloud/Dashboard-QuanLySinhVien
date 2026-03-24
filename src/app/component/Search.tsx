import Image from 'next/image'
import React from 'react'

const Search = () => {
  return (
    <div>
      <div className=' flex border rounded-2xl border-gray-400 items-center gap-2 px-2 py-1 w-full'>
                  <Image src="/search.webp" alt='' height={14} width={14} className=' '/>
                  <input type="text" placeholder='Search...' className='outline-none' />
          </div >
    </div>
  )
}

export default Search

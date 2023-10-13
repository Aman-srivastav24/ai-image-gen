import React from 'react'
import { download } from '../assets'
import {downloadImage} from '../utils';

function Card({_id , name ,prompt ,photo}) {
  return (
    <div className='rounded-xl group relative shadow-card hover:shadow-cardhover card'>
      <img src={photo} alt={prompt} className='w-full h-auto object-cover rounded-xl '  />
      <div className='group-hover:flex flex-col max-h-[94.5%]  absolute bottom-0 right-0 left-0 bg-[#10131f] m-2 p-4 hidden rounded-md'>
      <p className='text-white text-sm overflow-y-auto propmt '>{prompt}</p>
      <div className='mt-5 flex justify-between items-center gap-2  '>
        <div className='flex items-center gap-2'>
          <div className='w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold'>
          {name[0]}
          </div>
          <p className='text-white text-xs'>{name}</p>
        </div>
        <button type='button' className='outline-none bg-transparent border-none'>
          <img src={download} alt="download" onClick={()=>downloadImage(_id,photo)} className='w-6 h-6 object-cover invert'/>
        </button>
      </div>
      </div>
    </div>
  )
}

export default Card
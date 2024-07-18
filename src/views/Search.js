import React from 'react';

export default function Search() {
  return (
    <div>
      <h3 className='text-2xl text-white font-bold tracking-tight mb-4'>Genres you listen to the most
      </h3>
      <div className='grid grid-cols-3 gap-x-5 mb-6'>
        <a className='overflow-hidden' href="#" >
          <div className='bg-purplebox h-[220px] rounded-lg p-4 relative'>
            <span className='text-4xl font-bold'>Pop</span>
            <img className='w-[128px] h-[128px] -right-5 bottom-0 absolute rotate-25 shadow-2xl' src="https://i.scdn.co/image/ab67616d0000b27329369874cd836dc35a40a980" />
          </div>
        </a>
        <a className='overflow-hidden' href="#" >
          <div className='bg-orangebox h-[220px] rounded-lg p-4 relative'>
            <span className='text-4xl font-bold'>Hip Hop</span>
            <img className='w-[128px] h-[128px] -right-5 bottom-0 absolute rotate-25 shadow-2xl' src="https://i.scdn.co/image/ab67706f0000000207714ab1ffa0044de5633c9f" />
          </div>
        </a>
        <a className='overflow-hidden' href="#" >
          <div className='bg-redbox h-[220px] rounded-lg p-4 relative'>
            <span className='text-4xl font-bold'>Rock</span>
            <img className='w-[128px] h-[128px] -right-5 bottom-0 absolute rotate-25 shadow-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIW0j5yDH-CDaJMPEVI1HDcEu6d9t6JpJ2MA&s" />
          </div>
        </a>
      </div>

      <div>
        <h3 className='text-2xl text-white font-bold tracking-tight mb-4'>Browse all
        </h3>
        <div className='grid grid-cols-5 gap-5'>
          {new Array(40).fill(

            <a className='overflow-hidden' href="#" >
              <div className='bg-purplebox h-[220px] rounded-lg p-4 relative'>
                <span className='text-4xl font-bold'>Pop</span>
                <img className='w-[108px] h-[108px] -right-5 bottom-0 absolute rotate-25 shadow-2xl' src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebb19af0ea736c6228d6eb539c/2/en/default" />
              </div>
            </a>



          )}
        </div>
      </div>
    </div>
  )
}
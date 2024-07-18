import React from 'react';
import PlayBox from 'components/PlayBox';
import ArtistBox from 'components/ArtistBox';

import { NavLink } from 'react-router-dom';
import { Icon } from 'components/Icons';
import Song from 'components/Song';


export default function Home() {


  const items = [
    {
      id: 1,
      title: 'One Love',
      artist: 'Shubh',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROjk98eAOBAqp7pvC5k4AFq4rNsFEB8hubAw&s',
      src: 'https://freesound.org/people/siddhant8789/sounds/743901/'
    },

    {
      id: 2,
      title: 'Arijit Singh',
      artist: 'Tum hi ho',
      image: 'https://i.scdn.co/image/ab67706f0000000285c716247c24f66ef40f011e',
      src: 'https://freesound.org/data/previews/617/617382_7037-lq.mp3'
    },

    {
      id: 3,
      title: 'Palak Muchhal',
      artist: 'O Khuda',
      image: 'https://i.scdn.co/image/ab67616d00001e02808542d48ec7021a0577f4f5',
      src: 'https://freesound.org/data/previews/617/617306_5674468-lq.mp3'
    },

    {
      id: 4,
      title: 'Atif Aslam',
      artist: 'Aadat',
      image: 'https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84',
      src: 'https://freesound.org/data/previews/617/617305_11861866-lq.mp3'
    },

    {
      id: 5,
      title: 'Prritam',
      artist: 'O Maahi',
      image: 'https://i.scdn.co/image/ab67616d00001e0243cddcba56b445a39bcd36bc',
      src: 'https://freesound.org/data/previews/617/617303_1015240-lq.mp3'
    },


  ]

  const singer = [
    {
      id: 1,
      position: 'Yo Yo Honey Singh',
      name: 'Dheere Dheere',
      image: 'https://i.scdn.co/image/ab67616d0000b273d2ca4ba1030b7fefd8e53464'
    },
    {
      id: 2,
      position: 'Vishal-Shekhar',
      name: 'Bachna Ae Haseeno',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI2kHp91AZoD14Np01c-vZ9sDoKXuLJk22iA&s'
    },
    {
      id: 3,
      position: 'Ram Sampath',
      name: 'Taalash',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO7pRDbT4aXUClwBeCgsfaMlk6K3IzaIWLjw&s'
    },
    {
      id: 4,
      position: 'Pritam',
      name: 'Kalank (Original Motion Picture Soundtrack)',
      image: 'https://i.scdn.co/image/ab67616d0000b2739eb6c1861d8c058e7052df1e'
    },
    {
      id: 5,
      position: 'Pritam',
      name: 'Tum Mile',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwmee1N0W1lWRRvqsDrXQDYaBOC4AidgdYQQ&s'
    }
  ]

  const mixer = [
    {
      id: 1,
      position: 'Pritam, Yo Yo Honey Singh, Badshah and more',
      name: 'Daily Mix 1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhDNISAXrC3ITCLFUIeNftMn57YMyLjNleSA&s'
    },
    {
      id: 2,
      position: 'A.R Rehman, Kishore Kumar, Anu Malik and more',
      name: 'Daily Mix 2',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebb19af0ea736c6228d6eb539c/2/en/default'
    },
    {
      id: 3,
      position: 'Shubh, Imran Khan, Darshan Raval, Mitraz and more',
      name: 'Daily Mix 3',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe1e00861cdb6bf56b14a1118/3/en/default'
    },
    {
      id: 4,
      position: 'Vismay Patel, Shubham Kabra, Anuv Jain and more',
      name: 'Daily Mix 4',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba038d7d87f8577bbb9686bd3/4/en/default'
    },
    {
      id: 5,
      position: 'Kaka, Prabh Singh, Harnoor and more',
      name: 'Daily Mix 5',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebc33cc15260b767ddec982ce8/5/en/default'
    }

  ]



  return (
    <div>
      <div>
        <h3 className='text-3xl text-white font-bold tracking-tight mb-6'>Good evening</h3>
        <div className='grid grid-cols-3 items-center justify-center gap-x-6 gap-y-4 mb-6 transition-all'>
          <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
            <img className='w-[5rem] h-[5rem]' src="https://misc.scdn.co/liked-songs/liked-songs-640.png" />
            <h4 className='text-[16px] font-bold p-4'>Liked Songs</h4>
            <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
              <Icon name="play" />
            </button>
          </div>


          <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
            <img className='w-[5rem] h-[5rem]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIW0j5yDH-CDaJMPEVI1HDcEu6d9t6JpJ2MA&s" />
            <h4 className='text-[16px] font-bold p-4'>Retro Old 90's</h4>
            <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
              <Icon name="play" />
            </button>
          </div>


          <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
            <img className='w-[5rem] h-[5rem]' src="https://i.scdn.co/image/ab67706f0000000207714ab1ffa0044de5633c9f" />
            <h4 className='text-[16px] font-bold p-4'>Trending now India</h4>
            <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
              <Icon name="play" />
            </button>
          </div>


          <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
            <img className='w-[5rem] h-[5rem]' src="https://i.scdn.co/image/ab67616d00001e02774767c26967fb25e7854305" />
            <h4 className='text-[16px] font-bold p-4'>Ritviz</h4>
            <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
              <Icon name="play" />
            </button>
          </div>


          <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
            <img className='w-[5rem] h-[5rem]' src="https://i.scdn.co/image/ab6761610000e5ebfc043bea91ac91c222d235c9" />
            <h4 className='text-[16px] font-bold p-4'>Diljit Dosanjh</h4>
            <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
              <Icon name="play" />
            </button>
          </div>
          <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
            <img className='w-[5rem] h-[5rem]' src="https://i.scdn.co/image/ab67616d0000b27329369874cd836dc35a40a980" />
            <h4 className='text-[16px] font-bold p-4'>Ordinary Person (From "Leo")</h4>
            <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
              <Icon name="play" />
            </button>
          </div>

        </div>
      </div>
      <div className='flex justify-between items-end mb-4'>
        <PlayBox title={'Compiled for Siddhant'} />
        <PlayBox see />
      </div>
      <div className='grid grid-cols-5 gap-x-6'>
        {items.map(item => <Song item={item} key={item.id} />)}

      </div>
      <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Indian super stars'} />
        <PlayBox see />
      </div>
      <div className='grid grid-cols-5 gap-x-6 mb-8'>
        {mixer.map(item => (
          <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
            <div className='relative '>
              <img className='w-auto h-auto inset-0 object-cover mb-4' src={item.image} />
              <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                <Icon name="play" />
              </button>
            </div>
            <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
            <span className='mt-1 text-[14px] text-link'>{item.position}</span>

          </NavLink>
        ))}
      </div>
      <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Super Hits'} />
        <PlayBox see />
      </div>
      <div className='grid grid-cols-5 gap-x-6 mb-8'>
        {singer.map(item => (
          <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
            <div className='relative '>
              <img className='w-auto h-auto inset-0 object-cover mb-4 rounded-full' src={item.image} />
              <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                <Icon name="play" />
              </button>
            </div>
            <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
            <span className='mt-1 text-[14px] text-link'>{item.position}</span>

          </NavLink>
        ))}
      </div>

    </div>
  )
}

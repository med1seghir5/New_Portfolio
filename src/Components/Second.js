import React from 'react'
import pic from './images/pic.JPEG'


const Second = () => {
  return (
    <div className='flex flex-row' id='sec'>
      <div className='basis-1/2 pl-40 pt-6' id='pic'>
        <img src={pic} alt="My picture" className='w-96 rounded-full'/>
      </div>

      <div className='basis-1/2' id='tex'>
          <div className='text-3xl text-center m-8 pt-24 pr-14 font-Cairo' id='medseghir'>Hello, my name is Abdelmalek Medsghir, i am 19 years old and i am a Second year computer_science student in university of Batna 2 and am a Web_developer.</div>
          <div className='ml-12'><svg class="h-40 w-40 text-black ml-72" id='button'  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="7 8 3 12 7 16" />  <polyline points="17 8 21 12 17 16" />  <line x1="14" y1="4" x2="10" y2="20" /></svg></div>
      </div>
  </div>
  )
}

export default Second;
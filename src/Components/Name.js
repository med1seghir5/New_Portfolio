import React from 'react'

const Name = () => {
  return (
    <div className='p-40 ml-60 text-7xl font-semibold text-zinc-800' id='name'>
        <div id='hello'>Hello everyone, I'm Med_Seghir</div>
        <div className='pl-40' id='dev'>I'm a Web_developer</div>
        <button><svg class="h-48 w-48 text-zinc-800 ml-96" id='but' width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="7 8 3 12 7 16" />  <polyline points="17 8 21 12 17 16" />  <line x1="14" y1="4" x2="10" y2="20" /></svg></button>
    </div>
  )
}

export default Name;
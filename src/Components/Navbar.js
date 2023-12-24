import React from 'react';
import 'boxicons';

const Navbar= () => {
  return (
    <div className='flex flex-row pb-4 pl-60 ' id='navbar'>
         <div className='basis-1/2' id='port'>
          <span className='text-2xl text-black font-body'>Porfolio__2K23</span>
         </div>


        <div className='basis-1/2 space-x-5 ml-96 font-body' id='social'>
        <a href="https://github.com/med1seghir5/med1seghir5" className='pl-24 ' id='github'><button><svg class="h-8 w-8 text-black hover:text-gray-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></button></a>
        <a href='https://www.facebook.com/mohamedseghir.abdelmalek/' className='pl-10'><button><svg class="h-8 w-8 text-black hover:text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></button></a>
        <a href="https://www.instagram.com/mo7_seghir/" className='pl-10'><button><svg class="h-8 w-8 text-black hover:text-orange-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg></button></a>
        <a href='https://www.linkedin.com/in/mohamed-seghir-abdelmalek-111678290/' className='pl-10'   id='link'><button><svg class="h-8 w-8 text-black hover:text-blue-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg></button></a>
        </div>
    </div>
  )
}

export default Navbar;

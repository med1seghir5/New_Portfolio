import React from 'react'

const Skills = () => {
  return (
    <div className='flex flex-row mt-20 p-4' id='skills'>
        <div className='basis-1/2'>
            <div className='border-2 border-black w-72 ml-48 rounded-2xl pb-2 bg-slate-200' id='ski'>
              <h1 className='ml-16 text-4xl font-body'>Dev Skills :
                <svg class="h-12 w-12 text-black ml-14"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </h1>
              <div className='ml-20 text-3xl font-cairo'>
                - HTML <br/>
                - CSS <br/>
                - JavaScript <br/>
                - React_Js <br/>
                - Bootstrap <br/>
                - Tailwind <br/>
                - Render <br/>
              </div>
            </div>
        </div>

        <div className='basis-1/2 mt-4 mr-12'>
            <div className='border-2 border-black w-full rounded-2xl pb-2 bg-slate-200'>
              <div className='text-4xl font-body ml-64 pb-1' id='Act'>
                Activities & Exp :
              </div>
              <div><svg class="h-12 w-12 text-black ml-96" id='butt'  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="8" y1="21" x2="16" y2="21" />  <line x1="12" y1="17" x2="12" y2="21" />  <line x1="7" y1="4" x2="17" y2="4" />  <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />  <circle cx="5" cy="9" r="2" />  <circle cx="19" cy="9" r="2" /></svg></div>
              <div className='ml-16 font-cairo text-3xl'>
                - Member in GDSC (University of Batna2) "from November 2023 until today" <br/>
                - Member in SPE (chapter of University of Batna 2) "from March 2023 to November 2023" <br/>
                - Hackathon_Player (Code for Gaza) "4th place + our project were selected"
              </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;

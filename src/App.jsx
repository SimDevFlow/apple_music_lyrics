import { useState } from 'react'
import { texts } from './lyrics'
import LyricsTitle from './components/LyricsTitle'


function App() {

  return (
    <div className='w-screen h-screen flex overflow-hidden text-white'>
      <div className='flex-1/2 bg-amber-300 p-8'><img src="/taylor.jpg" className='rounded-2xl mx-auto font-apple ' width="400px" alt="taylor" />
        <p className=' font-bold  text-2xl text-center'>This Love(Taylor's Version)</p>
        <p className='text-center font-semibold'>Taylor Swift</p></div>
      <div className='pt-64 flex-1/2 bg-blue-400 gt p-8 overflow-y-scroll no-scrollbar'>
        {
          texts.map((text, index) => <LyricsTitle key={index}>{text}</LyricsTitle>)
        }
      </div>
    </div>
  )
}

export default App

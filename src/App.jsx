import { useRef, useState, useEffect } from 'react'
import { texts } from './lyrics'
import LyricsTitle from './components/LyricsTitle'


function App() {

  const scrollRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          top: 160,
          behavior: 'smooth',
        });
      }
    }, 1000);


    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='w-screen h-screen flex overflow-hidden text-white bg-linear-to-br from-[#6B94B2]  to-[#C79676]'>
      <div className='flex-1/2 p-8'><img src="/taylor.jpg" className='rounded-2xl mx-auto font-apple mb-2' width="400px" alt="taylor" />
        <div className='w-full max-w-[364px] flex gap-2 items-center text-xs mx-auto font-apple font-semibold'>
          <p>0:50</p>
          <div className='w-full h-2.5 rounded-full overflow-clip relative '>
            <div className='h-full w-full bg-white opacity-50 rounded-es-full-full absolute'></div>
            <div className='h-full w-8 bg-white opacity-100 rounded-es-full-full absolute z-10'></div>
          </div>
          <p>-2:56</p>
        </div>
        <p className=' font-bold  text-2xl text-center'>This Love(Taylor's Version)</p>
        <p className='text-center font-semibold'>Taylor Swift</p></div>
      <div ref={scrollRef} className='pt-64 flex-1/2 gt p-8 overflow-y-scroll no-scrollbar'>
        {
          texts.map((text, index) => <LyricsTitle key={index} id={text.id}>{text.lyric}</LyricsTitle>)
        }
        <div className='h-32'></div>
      </div>
    </div>
  )
}

export default App

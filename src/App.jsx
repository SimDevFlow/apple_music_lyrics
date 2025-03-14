import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import { texts } from './lyrics'
import LyricsTitle from './components/LyricsTitle'


function App() {
  const scrollRef = useRef(null);
  const { scrollY } = useScroll({
    container: scrollRef,
  })
  const width = useTransform(scrollY, [0,4600], [0,368])
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          top: 160,
          behavior: 'smooth',
        });
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='w-screen h-screen flex overflow-hidden text-white bg-linear-to-br from-[#6B94B2]  to-[#C79676] relative'>
      <div className='absolute w-64 h-64 bg-[#6B94B2] opacity-50 rounded-full blur-2xl'></div>
      <div className='absolute bottom-0 right-0 w-64 h-64 bg-[#C79676] opacity-50 rounded-full blur-2xl'></div>
      <div className='flex-1/2 p-8 z-10'><img src="/taylor.jpg" className='rounded-2xl mx-auto font-apple mb-2' width="400px" alt="taylor" />

        <p className=' font-bold  text-2xl text-center'>This Love(Taylor's Version)</p>
        <p className='text-center font-semibold'>Taylor Swift</p>
        <div className='w-full max-w-[364px] flex gap-2 items-center text-xs mx-auto font-apple font-semibold my-2'>
          <p>0:50</p>
          <div className='w-full h-2.5 rounded-full overflow-clip relative '>
            <div className='h-full w-full bg-white opacity-50 rounded-es-full-full absolute'></div>
            <motion.div style={{width:width}} className='h-full  bg-white opacity-100 rounded-es-full-full absolute z-10'></motion.div>
          </div>
          <p>-2:56</p>
        </div>
        <div className='w-full max-w-[364px] mx-auto flex justify-around px-16 items-center'>
          <motion.button whileTap={{scale:.8}}><img className='transform-[rotateY(-180deg)] w-12' src="/svg/btnL.svg" alt="" /></motion.button>
          <motion.button whileTap={{scale:.8}}><img className='w-12' src="/svg/pause.svg" alt="" /></motion.button>
          <motion.button
          whileTap={{scale:.8}}
          id='btn1' className=""><img className="w-12" src="/svg/btnL.svg" alt="" /></motion.button>
        </div>
      </div>
      <div ref={scrollRef} className='pt-64 flex-1/2 gt p-8 overflow-y-scroll no-scrollbar z-10'>
        {
          texts.map((text, index) => <LyricsTitle key={index} id={text.id}>{text.lyric}</LyricsTitle>)
        }
        <div className='h-32'></div>
      </div>
    </div>
  )
}

export default App

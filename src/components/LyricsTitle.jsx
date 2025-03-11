import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'motion/react'

function LyricsTitle({children,isActive}) {
    const ref = useRef(null)
    const inView = useInView(ref,{margin:"-256px 0px 0px 0px"})
    useEffect(()=>{
        console.log(inView)
    },[inView])
  return (
    <motion.p ref={ref} className='text-4xl font-bold font-apple mb-16 opacity-70'>{children}</motion.p>
  )
}

export default LyricsTitle
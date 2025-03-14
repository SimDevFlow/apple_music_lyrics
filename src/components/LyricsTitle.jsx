import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimate, useInView } from 'motion/react'
import { useLyricStore } from '../store'
import classNames from 'classnames'

function LyricsTitle({ children, id }) {
    // const ref = useRef(null)
    const setInViewLyric = useLyricStore((state) => state.setActiveLyric)
    const inViewLyric = useLyricStore((state) => state.activeLyric)
    const [positionY, setPositionY] = useState()
    const [scope, animate] = useAnimate()
    const [opacity,setOpacity] = useState(.5)
    const inView = useInView(scope, { margin: "-250px 0px -290px 0px", })

    useEffect(() => {

        if (inView){ 
            setInViewLyric(id)
            setOpacity(1)
        }else{
            setOpacity(.5)
        }
        if (!inView && inViewLyric == id) setInViewLyric(null)
        if (scope.current) {
            setPositionY(scope.current.getBoundingClientRect().top);
        }

    }, [inView, id, setInViewLyric])

    return (

        < div >
            {
                <motion.p
                    initial={{ opacity: 1,y:0 }}
                    animate={{y:inView?[-10,0] : 0,opacity:(positionY<220 && !inView)?0:opacity,transition:{duration:.5}}}
                    ref={scope} className={classNames('text-3xl font-bold font-apple mb-24 leading-8 opacity-5')}>{children}</motion.p>
            }
        </div >


    )
}

export default LyricsTitle
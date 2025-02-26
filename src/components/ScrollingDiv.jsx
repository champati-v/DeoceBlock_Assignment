import React from 'react'
import {motion} from 'framer-motion'
import {images1} from '../constants/index'

const ScrollingDiv = () => {
  return (
    <div className="w-full bg-white py-4 overflow-hidden relative">
    <motion.div
      className="flex w-max gap-4"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 20, 
        ease: "linear",
      }}
    >
      {[...images1, ...images1].map((img, index) => (
        <img key={index} src={img} alt={`img-${index}`} className="w-[500px] lg:w-[600px] h-auto object-cover" />
      ))}
    </motion.div>
  </div>
  )
}

export default ScrollingDiv
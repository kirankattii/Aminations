import { motion, useInView, useMotionValueEvent, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export const WhileInView = () => {
  return (
    <div className='relative mx-auto grid h-32 w-96 place-content-center'>
      <h1 className='relative z-0 text-3xl font-black uppercase'>Show me after scroll</h1>
      <motion.div initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        // viewport={{ amount: "all" }}
        viewport={{
          margin: "-200px",
          once: true
        }}
        onViewportEnter={() => console.log("hello")}
        onViewportLeave={() => console.log("goodbye")}
        className='absolute bottom-0 left-0 right-0 top-0 z-10 bg-indigo-500'></motion.div>

    </div>
  )
}




export const UseInView = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: "all"
  })


  return (
    <div ref={ref} className='relative mx-auto grid h-32 w-96 place-content-center'>
      <h1 className='relative z-0 text-3xl font-black uppercase'>Show me after scroll</h1>
      <motion.div animate={{
        y: isInView ? "100%" : "0%"
      }} className='absolute bottom-0 left-0  top-0 z-10 bg-indigo-500 w-1/3'></motion.div>
      <motion.div animate={{
        y: isInView ? "-100%" : "0%"
      }} className='absolute bottom-0 left-1/3 top-0 z-10  w-1/3 bg-indigo-500'></motion.div>
      <motion.div animate={{
        y: isInView ? "100%" : "0%"
      }} className='absolute bottom-0 left-2/3 top-0 z-10 bg-indigo-500 w-1/3'></motion.div>


    </div>
  )
}




export const UseScrollBasic = () => {
  const { scrollYProgress } = useScroll()
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest)
  })
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ['#ffffff', '#ff0000']
  )

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        x: "-50%",
        y: "-50%",
        background
      }}
      className="fixed left-1/2 top-1/2 h-4 w-screen bg-indigo-500" />

  )
}


import React from 'react'

export const UseScrollAdvanced = () => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["25% start", "end start"]
  })
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"])
  return (
    <motion.div ref={targetRef} style={{ rotate }} className="mx-auto size-48 bg-indigo-500" />
  )
}




export const UseScrollWithContainer = () => {
  const containerRef = useRef(null)
  const targetRef = useRef(null)
  const { scrollXProgress } = useScroll({
    container: containerRef,
    target: targetRef,
    axis: "x",
    offset: ["start end", "end start"]

  })
  return (
    <div ref={containerRef} className="flex w-screen overflow-x-scroll bg-indigo-500/50 py-8">
      <div className="w-screen shrink-0" />
      <motion.div style={{ opacity: scrollXProgress }} className="mx-auto size-48 shrink-0 bg-zinc-50" ref={targetRef} />
      <div className="w-screen shrink-0" />
    </div>
  )
}

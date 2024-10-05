import React from 'react'
import { UseInView, UseScrollAdvanced, UseScrollBasic, UseScrollWithContainer, WhileInView } from './components/ScrollAnimation'
import { UseAnimate } from './components/UseAnimate'

const App = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center mt-[80vh] mb-[80vh]'>
      {/* <WhileInView /> */}
      {/* <UseInView /> */}
      {/* <UseScrollBasic /> */}
      {/* <UseScrollAdvanced /> */}
      {/* <UseScrollWithContainer /> */}
      <UseAnimate />
    </div>
  )
}

export default App

import React from 'react'
import { SmoothScroll } from './component/SmoothScroll'
import { RevealLinks } from './component/HoverEffect'
import { HoverImageLinks } from './component/HoverImageLink'
import { SlideTabsExample } from './component/SliderTabs'
import { TextParallaxContentExample } from './component/TextParallaxContent'

const App = () => {
  return (
    <div>
      <SmoothScroll />
      <RevealLinks />
      <HoverImageLinks />
      <SlideTabsExample />
      <TextParallaxContentExample />
    </div>
  )
}

export default App

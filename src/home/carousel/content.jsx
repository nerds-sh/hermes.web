import React from 'react'

import { useStyle } from 'home/carousel/styles/style-content'
import { InsideContent } from 'home/carousel/inside-content'

export const Content = () => <>
  <h1 className={useStyle().head}>Hermes, we build the world</h1>
  <div className={useStyle().div1}>
    <InsideContent />
  </div>
</>

import React from 'react'

import { camera } from 'home/queries/camera-query/camera'
import { Wrapper } from 'home/queries/wrappers/wrapper'

export const Id = () => <Wrapper>
  { camera.id }
</Wrapper>

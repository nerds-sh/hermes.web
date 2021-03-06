import React from 'react'
import { Grid } from '@material-ui/core'

import { useStyle } from 'home/heading-section/live/hooks/use-style'
import { SeeButton } from 'home/heading-section/live/see-button'

export const Live = () => <Grid item classes={useStyle()} justify={'left'}>
  <Grid container justify={'left'}>
    <SeeButton path={'/cameras'} name={'See Cameras'} />
    <SeeButton path={'/detections'} name={'See Detections'} />
  </Grid>
</Grid>

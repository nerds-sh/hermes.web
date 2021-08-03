import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { Description as DescriptionIcon } from '@material-ui/icons'

import { useStyles } from 'detection/card/items/style'

export const Description = () => <Box classes={useStyles()}>
  <DescriptionIcon />
  <Typography variant={'h6'} className={useStyles().contentText}>
    Description
  </Typography>
</Box>
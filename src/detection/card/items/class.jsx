import React from 'react'
import { Box, Typography } from '@material-ui/core'
import CategoryIcon from '@material-ui/icons/Category'
import PropTypes from 'prop-types'

import { useStyles } from 'detection/card/items/style'

export const Class = ({ item }) => <Box classes={useStyles()}>
  <CategoryIcon />
  <Typography variant={'h6'} align={'center'} className={useStyles().contentText}>
    {`Class: ${item.class}`}
  </Typography>
</Box>

Class.propTypes = { item: PropTypes.object.isRequired }

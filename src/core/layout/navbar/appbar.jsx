import React from 'react'
import { AppBar as MaterialAppBar, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'core/layout/navbar/style'

export const AppBar = ({ children }) => <MaterialAppBar position={'sticky'} color={'white'} elevation={0}>
  <Grid container classes={useStyles()} alignItems={'center'} justify={'space-between'}>
    {children}
  </Grid>
</MaterialAppBar>

AppBar.propTypes = { children: PropTypes.element.isRequired }

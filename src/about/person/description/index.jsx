import React from 'react'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'about/person/description/style'
import { useDescription } from 'about/person/use-description'

export const Description = ({ person }) => <Typography className={useStyles().root}>
  {useDescription(person)}
</Typography>

Description.propTypes = { person: PropTypes.object.isRequired }
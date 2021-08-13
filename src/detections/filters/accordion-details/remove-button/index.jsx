import React from 'react'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
import PropTypes from 'prop-types'

import { useRemoveFilter } from 'detections/filters/hooks/use-remove-filter'
import { useStyles } from 'detections/filters/accordion-details/remove-button/style'
import { Wrapper } from 'detections/filters/accordion-details/remove-button/wrapper'

export const RemoveButton = ({ index, type }) => <Wrapper>
  <HighlightOffIcon onClick={useRemoveFilter(index, type)} classes={useStyles()} />
</Wrapper>

RemoveButton.propTypes = {
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
}
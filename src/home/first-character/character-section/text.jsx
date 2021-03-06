import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { useCharacterTitleStyle }
  from 'home/character-section/characters/character/text/content/hooks/use-character-title-style'
import { useDescriptionStyle }
  from 'home/character-section/characters/character/text/content/hooks/use-description-style'
import { usePickProperLeftStyle } from 'home/first-character/hooks/use-pick-proper-left-style'
import { firstCharacter } from 'home/first-character/character-section/first-character'

export const Text = () => <Grid classes={usePickProperLeftStyle()}>
  <Typography color={'primary'} classes={useCharacterTitleStyle()}>
    { firstCharacter.title }
  </Typography>
  <Typography color={'primary'} classes={useDescriptionStyle()}>
    { firstCharacter.content }
  </Typography>
</Grid>

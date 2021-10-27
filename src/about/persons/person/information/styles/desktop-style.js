import { makeStyles } from '@material-ui/core'

const root = theme => ({
  backgroundColor: theme.palette.secondary.main,
  width: 300,
  marginLeft: '-10%',
})

export const useDesktopStyles = makeStyles(theme => ({ root: root(theme) }))

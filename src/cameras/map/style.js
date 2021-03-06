import { makeStyles } from '@material-ui/core'

const markerStyle = {
  color: '#FF7B19',
  padding: 4,
  cursor: 'pointer',
}
const markerPosition = {
  position: 'absolute',
  width: 50,
  height: 20,
  left: -20 / 2,
  top: -20 / 2,
  ...markerStyle,
}
const grid = {
  height: '80vh',
  width: '100%',
  position: 'relative',
}
const infoWindowStyle = {
  position: 'relative',
  bottom: 150,
  left: '-45px',
  width: 220,
  backgroundColor: 'white',
  boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
  padding: 20,
  fontSize: 14,
  zIndex: 100,
}
export const useStyles = makeStyles({ markerPosition, grid, infoWindowStyle })

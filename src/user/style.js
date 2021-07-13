import { makeStyles } from '@material-ui/core'

const title = {
  textAlign: 'center',
  fontSize: '2vw',
}

const paper = {
  paddingTop: '1vh',
  paddingBottom: '1vh',
  textAlign: 'center',
  fontSize: '1vw',
}

const main = { maxWidth: '80%', margin: 'auto' }
export const useStyle = makeStyles(() => ({ title, paper, main }))
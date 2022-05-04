import React from 'react'
import { Container,Typography } from '@material-ui/core'
import useStyles from '../styles'
const Logsscreen = ({container,pod,logs}) => {
    const classes=useStyles();
  return (
    <div>
        <Container className={classes.whitescreen}>
            <Typography variant="h5">Logs from {container} in {pod}</Typography>
            <Container className={classes.blackscreen}>
             <Typography className={classes.whitetext}>
                 {logs}
             </Typography>
            </Container>
        </Container>

    </div>
  )
}

export default Logsscreen;
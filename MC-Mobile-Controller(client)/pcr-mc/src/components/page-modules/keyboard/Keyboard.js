import React, { useState } from 'react'
import { makeStyles, Box, IconButton, TextField } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import { getRoot } from '../../../utils/config'
import axios from 'axios';

const ROOT = getRoot()

const useStyles = makeStyles({
    textFieldLine: {
        display: 'flex',
        alignItems: 'center'
    }
})

const Keyboard = props => {
    const classes = useStyles()
    const [typedTxt, setTypedTxt] = useState('')

    const sendText = e => {
        // console.log(typedTxt)
        const url = `${ROOT}/type-text`
        axios.post(url, { typedTxt })
        .then(r => console.log(r))
        .catch(err => console.log(err))
    }

    return (
        <Box p={1}>
            <div className={classes.textFieldLine}>
                <TextField
                    variant="outlined"
                    placeholder="Type here ..."
                    size="small"
                    fullWidth
                    value={typedTxt}
                    onChange={e => setTypedTxt(e.target.value)}
                />
                <IconButton color="primary" component="span" onClick={sendText} >
                    <SendIcon />
                </IconButton>
            </div>
        </Box>
    )
}

export default Keyboard
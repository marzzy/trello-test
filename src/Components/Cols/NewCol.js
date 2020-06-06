import React, { useState, useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ToastContext } from '../../Providers';
import ColContext from './ColContext';

function NewCol() {
    const [colName, setColName] = useState('new col');
    const { setMsgContext } = useContext(ToastContext);
    const { colDispatch } = useContext(ColContext);

    function addNewCol() {
        colDispatch({ type: 'createNewCol', colName });
        setMsgContext('a new col successfully added', (new Date()).getTime());
    }

    function handleChange(event) {
        setColName(event.target.value);
    }
    
    return (
        <Grid container direction="column" justify="center" alignItems="stretch" >
            <TextField
                required
                id="new-col"
                label="Required"
                defaultValue="col name"
                value={colName}
                onChange={handleChange}
                variant="filled"
            />
            <Button variant="contained" color="primary" onClick={addNewCol}>
                Add new col
            </Button>
        </Grid>
    )
}

export default NewCol;
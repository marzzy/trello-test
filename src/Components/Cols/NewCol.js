import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function NewCol({ colDispatch }) {
    const [colName, setColName] = useState('new col');

    function addNewCol() {
        colDispatch({ type: 'createNewCol', colName })
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
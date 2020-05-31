import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Col from '../Col';

const ColsData=[
    { key: '123', name: 'todo', cardsId: [1, 5, 8] },
    { key: '234', name: 'doing', cardsId: [2,3,4] },
    { key: '456', name: 'done', cardsId: [6,7,9] }
];

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        minHeight: 300,
        width: 400,
        backgroundColor: theme.palette.grey[100]
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function SpacingGrid() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_INITIAL_DATA' });
    }, [dispatch]);
    
    function handleClick() {
        console.log('hiiiiiiiiii')
    }
    
    return (
        <Grid item xs={12} className={classes.root}>
            <Grid container justify="center" spacing={2}>
                {ColsData.map((value) => (
                    <Grid key={value} item>
                        <Paper className={classes.paper} >
                            <Col cardsId={value.cardsId} colName={value.name} />
                        </Paper>
                    </Grid>
                ))}
                <Grid item justify="center">
                    <Paper className={classes.paper} >
                        <Grid container direction="column" justify="center" alignItems="stretch" >
                            <Typography variant="subtitle1" gutterBottom>
                                Add new col
                            </Typography>
                            <Button variant="contained" color="primary" onClick={handleClick}>
                                Add new col
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

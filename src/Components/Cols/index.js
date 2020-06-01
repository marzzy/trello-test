import React, { useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { reducer, initVal } from './colRedux';
import Col from '../Col'; 
import NewCol from './NewCol';


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
    const [colState, dispatch] = useReducer(reducer, initVal);
    const reduxDispatch = useDispatch();
    
    useEffect(() => {
        reduxDispatch({ type: 'FETCH_INITIAL_DATA' });
    }, [reduxDispatch]);
    
    return (
        <Grid item xs={12} className={classes.root}>
            <Grid container justify="center" spacing={2}>
                {colState.map((value) => (
                    <Grid key={value.colId} item>
                        <Paper className={classes.paper} >
                            <Col
                                colId={value.colId}
                                cardsId={value.cardsId}
                                colName={value.colName}
                                colDispatch={dispatch}
                            />
                        </Paper>
                    </Grid>
                ))}
                <Grid item justify="center">
                    <Paper className={classes.paper} >
                        <NewCol
                            colDispatch={dispatch}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

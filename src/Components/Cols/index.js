import React, { useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { reducer, getInitVal } from './colRedcer';
import PresentCol from './PresentCol'; 
import NewCol from './NewCol';
import useStyles from './index.style';
import ColContext from './ColContext';

export default function SpacingGrid() {
    const classes = useStyles();
    const [colState, colDispatch] = useReducer(reducer, getInitVal());
    const reduxDispatch = useDispatch();
    
    useEffect(() => {
        reduxDispatch({ type: 'FETCH_INITIAL_DATA' });
    }, [reduxDispatch]);

    return (
        <Grid item xs={12} className={classes.root}>
            <Grid container justify="center" spacing={2}>
                <ColContext.Provider value={{ colsData: colState, colDispatch}}>
                    {colState.map((value) => (
                        <Grid key={value.colId} item>
                            <Paper className={classes.paper} >
                                <PresentCol
                                    colId={value.colId}
                                    cardsId={value.cardsId}
                                    colName={value.colName}
                                />
                            </Paper>
                        </Grid>
                    ))}
                    <Grid item justify="center">
                        <Paper className={classes.paper} >
                            <NewCol />
                        </Paper>
                    </Grid>
                </ColContext.Provider>
            </Grid>
        </Grid>
    );
}

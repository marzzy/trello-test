import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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

    function handleClick() {
        console.log('hiiiiiiiiii')
    }

    return (
        <Grid item xs={12} className={classes.root}>
            <Grid container justify="center" spacing={2}>
                {ColsData.map((value) => (
                    <Grid key={value} item>
                        <Paper className={classes.paper} >
                            <Typography variant="subtitle1" gutterBottom>
                                Col Name: {value.name}
                            </Typography>
                            {value.cardsId.map(cardId => (
                                <p key={cardId}>
                                    {cardId}
                                </p>
                            ))}
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
                                +
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
}

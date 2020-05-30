import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'red',
        width: '50px'
    },
    title: {
        color: theme.palette.primary.dark,
    },
    titleBar: {
        background: theme.palette.primary.light,
    },
}));

function Col({ colData, handleClick }) {
    const classes = useStyles();
        
    return (
        <GridListTile key={colData.key}>
            <GridListTileBar
                title={colData.title}
                classes={{
                    root: classes.titleBar,
                    title: classes.title,
                }}
                actionIcon={
                    <IconButton onClick={handleClick} aria-label={`star ${colData.title}`}>
                        +
                    </IconButton>
                }
            />
        </GridListTile>
    )
    
}

export default Col;

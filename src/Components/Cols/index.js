import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';

const tileData = [
    {key: '123', title: 'hi this is first one' , },
    {key: '234', title: 'hi 02 this is first one'},
    {key: '6576', title: 'hi 03 this is first one'},
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%',
        cellHeight: 'auto'
    },
    title: {
        color: theme.palette.primary.dark,
    },
    titleBar: {
        background: theme.palette.primary.light,
    },
}));

function Cols() {
    const classes = useStyles();
    function handleClick() {
        console.log('Im clicked');
    }

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.key}>
                        <>
                            <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton onClick={handleClick} aria-label={`star ${tile.title}`}>
                                        +
                                    </IconButton>
                                }
                            />
                            <p>hiiii</p>
                            <p>hiiii 222</p>
                            <p>hiiii 333 </p>
                            <p>hiiii 444 </p>
                            <p>hiiii 555 </p>
                        </>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default Cols;

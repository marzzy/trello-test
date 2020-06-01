import React from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TodoCard from '../TodoCard';
import { AddTodoAction } from '../../redux/actions';

function Col({ colId, colName, cardsId, colDispatch }) {
    const dispatch = useDispatch();

    function addNewCard() {
        const newCardId = (new Date()).getTime();

        colDispatch({ type: 'updateColCardsId', newCardId, colId})
        dispatch(AddTodoAction(newCardId, 'new card', 'card description'));
    }

    function removeCol() {
        colDispatch({ type: 'deleteCol', colId });
    }

    return (
        <Grid container direction="column" justify="center" alignItems="stretch" >
            <Grid container
                direction="row"
                justify="space-between"
                alignItems="center">
                <Typography variant="subtitle1" gutterBottom>
                    Col Name: {colName}
                </Typography>
                <Button variant="contained" color="secondary" onClick={removeCol}>
                    remove col
                </Button>
            </Grid>    
            {cardsId.map(cardId => (
                <TodoCard cardId={cardId} key={cardId} />
            ))}
            <Button variant="contained" color="primary" onClick={addNewCard}>
                Add new card
            </Button>
        </Grid>
   ) 
}

export default Col;

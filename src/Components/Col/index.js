import React from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TodoCard from '../TodoCard';
import { AddTodoAction } from '../../redux/actions';

function Col({ colName, cardsId }) {
    const dispatch = useDispatch();

    function addNewCard() {
        console.log('salam');
        dispatch(AddTodoAction('title', 'description'));
    }

    return (
        <Grid container direction="column" justify="center" alignItems="stretch" >
            <Typography variant="subtitle1" gutterBottom>
                Col Name: {colName}
            </Typography>
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

import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TodoCard from '../TodoCard';
import { AddTodoAction } from '../../redux/actions';
import ToastContext from '../../Context';
import ColContext from './ColContext';

function PresentCol({ colId, colName, cardsId }) {
    const dispatch = useDispatch();
    const { setMsgContext } = useContext(ToastContext);
    const { colDispatch } = useContext(ColContext);

    function addNewCard() {
        const newCardId = (new Date()).getTime();

        colDispatch({ type: 'increaseColCardsId', cardId: newCardId, colId });
        dispatch(AddTodoAction(newCardId, 'new card', 'card description'));
        setMsgContext('a new card was successfully added', (new Date()).getTime()); 
    }

    function removeCol() {
        colDispatch({ type: 'deleteCol', colId });
        setMsgContext(`col with name of ${colName} and id ${colId} was successfully deleted`, (new Date()).getTime());
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
                {colId !== 111 &&
                    <Button variant="contained" color="secondary" onClick={removeCol}>
                        remove col
                    </Button>
                }
            </Grid>    
            {cardsId.map(cardId => (
                <TodoCard cardId={cardId} key={cardId} colId={colId} />
            ))}
            <Button variant="contained" color="primary" onClick={addNewCard}>
                Add new card
            </Button>
        </Grid>
   ) 
}

export default PresentCol;

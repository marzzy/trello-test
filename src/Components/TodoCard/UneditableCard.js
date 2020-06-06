import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { RemoveTodoAcion } from '../../redux/actions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ToastContext } from '../../Providers';
import ColContext from '../Cols/ColContext';

function UneditableCard({ todoId, title, description, setIsEditableValue, colId }) {
    const dispatch = useDispatch();
    const { setMsgContext } = useContext(ToastContext);
    const { colDispatch } = useContext(ColContext);

    function editCard() {
        setIsEditableValue(true);
    }

    function deleteCard() {
        colDispatch({ type: 'decreaseColCardsId', todoId, colId });
        dispatch(RemoveTodoAcion(todoId));
        setMsgContext(`card with id of ${todoId} was successfully deleted`, (new Date()).getTime()); 
    }

    return (
        <>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h5">
                            {title}
                        </Typography>
                        {description && 
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                        }
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={editCard} >
                        edit
                    </Button>
                    <Button size="small" color="secondary" onClick={deleteCard} >
                        delete
                    </Button>
                </CardActions>
            </Card>
            <br />
        </> 
    )
}

export default UneditableCard;
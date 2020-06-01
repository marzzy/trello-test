import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { EditTodoAcion } from '../../redux/actions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ToastContext from '../../Context';
import ColContext from '../Cols/ColContext';

function EditableCard({ todoId, title, description, setIsEditableValue, colId }) {
    const dispatch = useDispatch();
    const { setMsgContext } = useContext(ToastContext);
    const { colsData, colDispatch } = useContext(ColContext);
    const [selectedCol, setSelectedCol] = useState(colId);
    const [titleValue, setTitle] = React.useState(title);
    const [descriptionValue, setDescription] = React.useState(description);

    const handleColChange = (event) => {
        setSelectedCol(event.target.value);
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    
    function discardChanges() {
        setIsEditableValue(false);
    }

    function updateTodo() {
        if (selectedCol === colId) {
            colDispatch({ type: 'increaseColCardsId', todoId, colId });
        } else {
            colDispatch({ type: 'increaseColCardsId', todoId, colId: selectedCol });
            colDispatch({ type: 'decreaseColCardsId', todoId, colId });
        }
        dispatch(EditTodoAcion(todoId, titleValue, descriptionValue));
        setMsgContext(`card with id of ${todoId} was successfully edited`, (new Date()).getTime());
        setIsEditableValue(false);
    }
    
    return (
        <>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <TextField
                            id="title"
                            label="title"
                            value={titleValue}
                            onChange={handleTitleChange}
                            style={{ margin: 8 }}
                            placeholder="enter title"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="description"
                            label="description"
                            value={descriptionValue}
                            onChange={handleDescriptionChange}
                            style={{ margin: 8 }}
                            placeholder="enter description"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <InputLabel id="demo-simple-select-label">col name</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedCol}
                            onChange={handleColChange}
                        >
                            {colsData.map(col => (
                                <MenuItem value={col.colId}>{col.colName}</MenuItem>
                            ))}
                        </Select>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={updateTodo}>
                        Submit
                    </Button>
                    <Button size="small" color="secondary" onClick={discardChanges}>
                        Discard
                    </Button>
                </CardActions>
            </Card>
            <br />
        </> 
    )
}

export default EditableCard;
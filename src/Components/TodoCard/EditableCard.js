import React from 'react';
import { useDispatch } from 'react-redux';
import { EditTodoAcion } from '../../redux/actions';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function EditableCard({ todoId, title, description, setIsEditableValue }) {
    const dispatch = useDispatch();
    const [titleValue, setTitle] = React.useState(title);
    const [descriptionValue, setDescription] = React.useState(description);

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
        dispatch(EditTodoAcion(todoId, titleValue, descriptionValue));
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
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={updateTodo}>
                        Submit
                    </Button>
                    <Button size="small" color="primary" onClick={discardChanges}>
                        Discard
                    </Button>
                </CardActions>
            </Card>
            <br />
        </> 
    )
}

export default EditableCard;
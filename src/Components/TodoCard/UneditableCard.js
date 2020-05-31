import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function UneditableCard({ title, description, setIsEditableValue }) {
    function editCard() {
        setIsEditableValue(true);
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
                    <Button size="small" color="primary">
                        delete
                    </Button>
                </CardActions>
            </Card>
            <br />
        </> 
    )
}

export default UneditableCard;
import { makeStyles } from '@material-ui/core/styles';

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

export default useStyles;

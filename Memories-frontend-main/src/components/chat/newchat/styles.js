import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(400 + theme.spacing(3))]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
        position: 'absolute',
        width: '350px',
        top: '70px',
        left: 'calc(50% + 150px - 175px)'
    },
    input: {},
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        marginTop: theme.spacing(3)
    },
    errorText: {
        color: 'red',
        textAlign: 'center'
    }
}))
import { createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: { main: '#424bf5' },
        secondary: { main: '#f50057' },
        background: {
            default: '#fff0e5',
        },
    },
});
theme.typography.h1 = {
    fontSize: '1.37rem',
    fontWeight: '700',
    lineHeight: '1.2',

    fontFamily: "ADLaM Display",
    [theme.breakpoints.up("xs")]: {
        fontSize: '2rem',
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up("md")]: {
        fontSize: '3rem',
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: '2rem',
    }
};
theme.typography.h2 = {
    fontSize: '1.37rem',
    fontWeight: '700',
    lineHeight: '1',
    fontFamily: "Apercu, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    [theme.breakpoints.up("xs")]: {
        fontSize: '2rem',
        fontWeight: "500"
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: '2rem',
        fontWeight: "600"
    },
    [theme.breakpoints.up("md")]: {
        fontSize: '4rem',
        fontWeight: '700'
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: '3rem',
        fontWeight: '700'
    }
};
theme.typography.h3 = {
    fontSize: '1.1rem',
    fontWeight: '400',
    lineHeight: '1.2',
    fontFamily: "Apercu, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    [theme.breakpoints.up("xs")]: {
        fontSize: '1rem',
    },
    [theme.breakpoints.up("sm")]: {
        fontSize: '1.1rem',
    },
    [theme.breakpoints.up("md")]: {
        fontSize: '1.1rem',
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: '1rem',
    }
};


export default (theme);
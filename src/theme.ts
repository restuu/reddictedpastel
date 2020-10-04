import { createMuiTheme } from '@material-ui/core/styles';
import { red, yellow, grey } from '@material-ui/core/colors';

// Create a theme instance
const theme = createMuiTheme({
  typography: {
    fontFamily: ['nunito'].join(','),
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: grey.A700,
    },
    text: {
      primary: yellow.A400,
      secondary: '#00e5ff',
    },
  },
});

export default theme;

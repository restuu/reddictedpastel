import { createMuiTheme } from '@material-ui/core/styles';
import { red, yellow, grey } from '@material-ui/core/colors';

// import Riicchan from './assets/font/Riicchan-Regular.ttf';

const riicchan: any = {
  fontFamily: 'riicchan',
  fontStyle: 'normal',
  fontWeight: 400,
  src: 'url(/fonts/Riicchan-Regular.otf)',
};

// Create a theme instance
const theme = createMuiTheme({
  typography: {
    fontFamily: ['nunito'].join(','),
    subtitle2: { fontFamily: 'riicchan, nunito', fontSize: 24 },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [riicchan],
      },
    },
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

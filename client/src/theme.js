import {
  unstable_createMuiStrictModeTheme as createMuiTheme, // We use the unstable_createMuiStrictModeTheme to remove the findDOMNode warning
  colors,
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#F4F6F8',
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      default: '#2A5BD7',
      main: '#2A5BD7',
    },
    secondary: {
      default: '#ef7a0b',
      main: '#ef7a0b',
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;

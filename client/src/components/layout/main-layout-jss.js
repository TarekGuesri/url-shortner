import { createUseStyles } from 'react-jss';
import backgroundImage from 'src/assets/images/background.svg';

const useStyles = createUseStyles({
  root: {
    overflow: 'auto',
    minHeight: '50%',
    width: '100%',
    '@media screen and (min-width: 992px)': {
      '& .content': {
        maxWidth: '25em',
      },
      background: `url(${backgroundImage})`,
      'background-repeat': 'no-repeat',
      'background-position-x': 'right',
      'background-position-y': 'top',
      'background-size': 'contain',
    },
  },
  brand: {
    fontFamily: 'Oleo Script',
    fontSize: '3.5rem',
    color: '#2A5BD7',
    textDecoration: 'none',
    // padding: '1rem',
  },
  container: {
    minHeight: '57vh',
    '@media screen and (max-width: 992px)': {
      marginTop: '8vh',
      marginBottm: '20px',
    },
  },
  footer: {
    marginTop: '15px',
    position: 'relative',
    bottom: 0,
  },
});

export default useStyles;

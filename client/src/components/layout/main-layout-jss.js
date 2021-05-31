import { createUseStyles } from 'react-jss';
import backgroundImage from 'src/assets/images/background.svg';

const useStyles = createUseStyles({
  root: {
    height: '100vh',
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
    padding: '1rem',
  },
});

export default useStyles;

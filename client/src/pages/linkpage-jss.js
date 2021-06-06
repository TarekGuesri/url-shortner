import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    marginTop: '14.5rem',
    maxWidth: '600px',
    '@media screen and (max-width: 922px)': {
      marginTop: '2rem',
    },
  },
});

export default useStyles;

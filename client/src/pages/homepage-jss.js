import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  root: {
    marginTop: '14.5rem',
    '@media screen and (max-width: 922px)': {
      marginTop: '1rem',
    },
  },
});

export default useStyles;

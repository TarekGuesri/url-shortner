import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RoundedTextField from 'src/components/inputs/RoundedTextField';

import useStyles from './homepage-jss';

const HomePage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Paste your long URL here:
      </Typography>
      <RoundedTextField />
    </Box>
  );
};

export default HomePage;

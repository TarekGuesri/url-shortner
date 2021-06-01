import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RoundedTextField from 'src/components/inputs/RoundedTextField';

import useStyles from './homepage-jss';

const HomePage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box mb={5}>
        {' '}
        <Typography variant="h6" gutterBottom>
          Paste your long URL here:
        </Typography>
        <RoundedTextField
          placeholder="Shorten your URL..."
          style={{ maxWidth: '40rem' }}
          buttonText="Shorten"
        />
      </Box>
      <Box>
        {' '}
        <Typography variant="h6" gutterBottom>
          Your short URL:
        </Typography>
        <RoundedTextField
          placeholder="..."
          style={{ maxWidth: '40rem' }}
          buttonText="Copy"
          disabledButton
          hasIcon
        />
      </Box>
    </Box>
  );
};

export default HomePage;

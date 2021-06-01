import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RoundedTextField from 'src/components/inputs/RoundedTextField';

import useStyles from './homepage-jss';

const HomePage = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    longURL: '',
    shortURL: '',
  });

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleShorten = (e) => {
    console.log(e.target.value);
  };

  const { longURL, shortURL } = state;

  return (
    <Box className={classes.root}>
      <Box mb={5}>
        <Typography variant="h6" gutterBottom>
          Paste your long URL here:
        </Typography>
        <RoundedTextField
          name="longURL"
          value={longURL}
          onChange={handleOnChange}
          placeholder="Shorten your URL..."
          style={{ maxWidth: '40rem', marginTop: '10px' }}
          buttonText="Shorten"
        />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Your short URL:
        </Typography>
        <RoundedTextField
          name="shortURL"
          value={shortURL}
          placeholder="..."
          style={{ maxWidth: '40rem', marginTop: '10px' }}
          buttonText="Copy"
          disabledButton
          hasIcon
          disabled
        />
      </Box>
    </Box>
  );
};

export default HomePage;

import React, { useState } from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RoundedTextField from 'src/components/inputs/RoundedTextField';

import useStyles from './homepage-jss';

const HomePage = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    longUrl: '',
    longUrlError: '',
    shortUrl: '',
  });

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleShorten = (e) => {
    console.log(e.target.value);
    setState({ ...state, longUrlError: 'test' });
  };

  const { longUrl, longUrlError, shortUrl } = state;

  return (
    <Box className={classes.root}>
      <Box mb={5}>
        <Typography variant="h6" gutterBottom>
          Paste your long URL here:
        </Typography>
        <RoundedTextField
          name="longUrl"
          value={longUrl}
          onChange={handleOnChange}
          placeholder="Shorten your URL..."
          style={{ maxWidth: '40rem', marginTop: '4px' }}
          buttonText="Shorten"
          buttonOnClick={handleShorten}
          helperText={longUrlError}
          error={!!longUrlError}
        />
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          Your short URL:
        </Typography>
        <RoundedTextField
          name="shortUrl"
          value={shortUrl}
          placeholder="..."
          style={{ maxWidth: '40rem', marginTop: '4px' }}
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

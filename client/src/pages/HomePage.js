import React, { useState } from 'react';
import axios from 'axios';

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
    loading: false,
  });

  const handleOnChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleShorten = async () => {
    setState({ ...state, longUrlError: '', loading: true });

    try {
      const res = await axios.post('urls/encode', state);
      setState({ ...state, shortUrl: res.data, loading: false });
      console.log(res.data);
    } catch (error) {
      const { errors } = error.response.data;
      console.log(errors);
      setState({ ...state, longUrlError: errors[0].msg, loading: false });
    }
  };

  const { longUrl, longUrlError, shortUrl, loading } = state;

  return (
    <Box className={classes.root}>
      <Box mb={5}>
        <Typography variant="h6" gutterBottom>
          Paste your long URL here:
        </Typography>
        <RoundedTextField
          name="longUrl"
          value={longUrl}
          placeholder="Shorten your URL..."
          style={{ maxWidth: '40rem', marginTop: '4px' }}
          buttonText="Shorten"
          disabledButton={!longUrl || loading}
          helperText={longUrlError}
          error={!!longUrlError}
          onChange={handleOnChange}
          buttonOnClick={handleShorten}
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
          disabledButton={!shortUrl}
          hasIcon
          disabled
        />
      </Box>
    </Box>
  );
};

export default HomePage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './linkpage-jss';

const LinkPage = ({ match }) => {
  const classes = useStyles();
  const { code } = match.params;

  const [state, setState] = useState({
    errorMessage: '',
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`urls/decode/${code}`);

        // We redirect the user to the link in case it was found
        window.location.replace(res.data);
      } catch (error) {
        const {
          response: { data },
        } = error;
        setState({ ...state, loading: false, errorMessage: data });
      }
    };
    fetchData();
  }, []);

  const { loading, errorMessage } = state;

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <Box className={classes.root}>
      <Typography variant="h2" gutterBottom>
        {errorMessage}
      </Typography>
    </Box>
  );
};

export default LinkPage;

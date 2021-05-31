import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

import useStyles from './main-layout-jss';

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box px={5} py={3}>
        <Box
          component="span"
          display="block"
          color="primary.main"
          className={classes.brand}
        >
          Shortify
        </Box>

        {children}
      </Box>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;

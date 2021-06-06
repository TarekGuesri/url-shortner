import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './main-layout-jss';

const MainLayout = ({ children }) => {
  const classes = useStyles();

  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className={classes.root}>
      <Box px={5} py={3}>
        <Box
          component="span"
          display="block"
          color="primary.main"
          className={classes.brand}
          mb={10}
        >
          <Link to="/" className={classes.brand}>
            Shortify
          </Link>
        </Box>
        {children}

        <Box className={classes.footer} mb={4}>
          <Typography variant="subtitle1">
            © {getYear()} TARIQ LAMIN GUESRI. ALL RIGHTS RESERVED.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;

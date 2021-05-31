import React from 'react';
import Box from '@material-ui/core/Box';

import useStyles from './main-layout-jss';

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        component="span"
        display="block"
        color="primary"
        className={classes.brand}
      >
        Shortify
      </Box>

      {children}
    </div>
  );
};

export default MainLayout;

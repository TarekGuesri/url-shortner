import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from '@material-ui/icons/Link';

const RoundedTextField = () => {
  return (
    <TextField
      // className={classes.inputRounded}
      className="inputRounded"
      placeholder="Search"
      variant="outlined"
      size="small"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Link />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default RoundedTextField;

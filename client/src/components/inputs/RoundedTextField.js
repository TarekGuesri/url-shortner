import React from 'react';
import PropTypes from 'prop-types';

import { createUseStyles } from 'react-jss';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/icons/Link';
import FileCopy from '@material-ui/icons/FileCopy';

const useStyles = createUseStyles({
  endButton: {
    minWidth: '10rem',
    minHeight: '40px',
    color: '#fff!important',
    backgroundColor: '#ef7a0b!important',
    '&:hover': {
      backgroundColor: '#fff',
      borderColor: '#fff',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ffc38a',
      borderColor: '#ffc38a',
    },
    '&:focus': {
      boxShadow: '0',
      backgroundColor: '#fff',
    },
  },
  endButtonText: {
    padding: '6px 24px!important',
  },
  disabledButton: {
    backgroundColor: '#f9b87b!important',
  },
});

const RoundedTextField = ({
  buttonText,
  disabledButton,
  hasIcon,
  buttonOnClick,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <TextField
      className="inputRounded"
      placeholder="Search"
      variant="outlined"
      size="small"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Link />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <Button
              classes={{
                root: classes.endButton,
                text: classes.endButtonText,
                disabled: classes.disabledButton,
              }}
              disabled={disabledButton}
              startIcon={hasIcon ? <FileCopy /> : <></>}
              onClick={buttonOnClick}
            >
              {buttonText}
            </Button>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  );
};

RoundedTextField.propTypes = {
  buttonText: PropTypes.string,
  disabledButton: PropTypes.bool,
  hasIcon: PropTypes.bool,
  buttonOnClick: PropTypes.func,
};

RoundedTextField.defaultProps = {
  buttonText: 'Click',
};

export default RoundedTextField;

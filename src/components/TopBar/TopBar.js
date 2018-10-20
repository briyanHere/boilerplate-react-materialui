import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const styles = {
  root: {
    
  },
};

function TopBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant="title" color="inherit">
            TopBar
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Drawer } from '@material-ui/core';

const styles = theme => ({
  root: {

  }
});

function ClippedDrawer(props) {
  const { classes } = props;

  return (
    <div className={}>
      <Drawer
        variant="permanent"
      />
    </div>
  );
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);

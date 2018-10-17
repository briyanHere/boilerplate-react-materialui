import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import withRoot from './withRoot';

class App extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default withRoot(withStyles({})(App));
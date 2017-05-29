import {render} from 'react-dom';
import React from 'react';
import BusyBeeApp from './BusyBeeApp';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class MainApp extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <BusyBeeApp/>
      </MuiThemeProvider>
    );
  }
}

render(
  React.createElement(MainApp, {}),
  document.getElementById('screen')
);

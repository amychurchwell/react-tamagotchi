import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import House from './House';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#e7f4f0',
      dark: '#b5c1be',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffeeff',
      main: '#f8bbd0',
      dark: '#c48b9f',
      contrastText: '#000',
    },
  },
});

class App extends React.Component {
  constructor(props){
    super(props);
    this.state;
  }

  render(){
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <House />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

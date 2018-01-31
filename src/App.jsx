import React from 'react';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';


import ChatRoom from './components/ChatRoom';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <AppBar position='static' color='default'>
          <Toolbar>
            <Typography type='title' color='inherit'>
              Chat React
            </Typography>
          </Toolbar>
        </AppBar>

        <ChatRoom/>
      </div>
    )
  }
}     
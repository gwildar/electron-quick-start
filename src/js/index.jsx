import React from 'react';
import ReactDOM from 'react-dom';
import { ipcRenderer } from 'electron';
import Panel from './Panel.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { screens: '' };

    console.log(ipcRenderer.sendSync('synchronous-message', 'ping')); // prints "pong"

    ipcRenderer.on('asynchronous-reply', (event, arg) => {
      console.log(arg); // prints "pong"
    });

    ipcRenderer.send('asynchronous-message', 'ping');
  }

  render() {
    return (
      <div>
        <div>
          {this.screens}
        </div>
        <Panel panelNo="2" />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

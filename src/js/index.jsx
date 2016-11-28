
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: 'test' };
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

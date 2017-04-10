import React from 'react';
import Game from './game/Game';
import Queuing from './Queuing';


class App extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    socket.on('route', this.navigate);
    socket.on('player disconnect', this.disconnect);
  }

  navigate = (route) => {
    this.props.router.replace(route);
    this.setState({ route });
  }

  disconnect = (data) => {
    console.log('opponent disconnect');
  }

  render() {

    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default App;

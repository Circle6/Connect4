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

    const appStyle = {
      height: "100%",
      width: "100%",
      left: "0",
      right: "0",
      top: "0",
      bottom: "0",
      display: "table",
      position: "absolute",
      backgroundColor: "#3175e2"
    }

    return (
      <div style={appStyle}>
        {this.props.children}
      </div>
    )
  }
}

export default App;

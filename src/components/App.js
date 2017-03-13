import React from 'react';


class App extends React.Component {

  constructor() {
    super();
  }

  componentDidMount() {
    socket.on('route', this.navigate);
  }

  navigate = (route) => {
    this.props.router.replace(route);
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

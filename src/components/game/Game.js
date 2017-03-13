import React from 'react';

import Chat from './Chat';
import Board from './Board';

class Game extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {
  }

  render() {

    const gameStyle = {
      marginTop: "2em",
      height: "400px",
      width: "800px"
    };

    return (
      <div className="container" style={gameStyle}>
        <div className="row">
          <div className="col-sm-8 well">
            <Board />
          </div>
          <div className="col-sm-4 well">
            <Chat />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;

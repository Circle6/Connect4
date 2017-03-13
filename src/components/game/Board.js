import React from 'react';
import GameStore from '../../stores/GameStore';
import * as GameActions from '../../actions/GameActions';
import Cell from './Cell';

class Board extends React.Component {

  constructor() {
    super();
    this.state = {
      gameData: [[]],
      playerStatus: "",
      gameStatus: "player1",
      gameId: "",
      opponentName: "",
      buttons: [0,1,2,3,4,5,6]
    };
  }

  componentWillMount() {

    socket.on('init game', this.init);
    socket.on('update game', this.updateGame);
    socket.on('victory', this.gameOver);

    GameStore.on("gameCreated", () => {
      this.setState({
        gameData: GameStore.gameData,
        playerStatus: GameStore.playerStatus,
        gameId: GameStore.gameId,
        opponentName: GameStore.opponentName
      });

      console.log("board component created game");
    });

    GameStore.on("gameUpdated", () => {
      this.setState({
        gameData: GameStore.gameData,
        gameStatus: GameStore.gameStatus
      });

      console.log("board component updated game");
    });
  }

  init = (gameData) => {
    console.log("creation emit received");
    GameActions.createGame(gameData);
  }

  updateGame = (board) => {
    console.log("update emit received");
    GameActions.updateGame(board);
  }

  gameOver = (board) => {
    GameActions.finishGame(board);
    console.log("SOMEONE WON!!!");
  }

  makeMove = (column) => {
    if (this.state.playerStatus == this.state.gameStatus) {
      socket.emit("make move", {
        column: column,
        gameId: this.state.gameId,
        player: this.state.playerStatus
      });
    }
  }

  render() {

    const rowStyle = {
      width: "490px",
      height: "70px",
      fontSize: "0",
      clear: "left"
    };

    const gameStyle = {
      fontSize: "0"
    };

    const buttonStyle = {
      margin: "20px 5px 10px 5px",
      height: "60px",
      width: "60px",
      display: "inline-block"
    };

    const headingStyle = {
      margin: "0 auto",
      textTransform: "capitalize",
      marginBottom: "10px",
      width: "400px",
      textAlign: "center"
    };

    const Board = this.state.gameData.map((row, i) => {

      let Row = row.map((cell, j) => {
        const id = i.toString() + j.toString();
        return (<Cell key={id} status={cell} />)
      });

      return (
        <div key={i.toString()} style={rowStyle}>
          {Row}
        </div>
      )
    });

    let heading = "Your Turn";

    if (this.state.gameStatus != this.state.playerStatus) {
      heading = `${this.state.opponentName}'s Turn!`;
    }

    if (this.state.gameStatus == "finished") {
      heading = "You Won!!!";

      if (this.state.gameStatus != this.state.playerStatus) {
        heading = `${this.state.opponentName} Won!!!`;
      }
    }

    let Buttons = this.state.buttons.map((button) => {
      return (
        <div key={button.toString()} className="btn btn-info" style={buttonStyle} onClick={() => this.makeMove(button)} />
      )
    });

    return (

      <div>
        <h1 style={headingStyle}>{heading}</h1>
        {Board}
        {Buttons}
      </div>
    );
  }
}

export default Board;

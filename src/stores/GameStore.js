import { EventEmitter } from "events";
import dispatcher from "../dispatcher.js";

class GameStore extends EventEmitter {
  constructor() {
    super();
  };

  createGame = (gameData) => {
    this.gameData = gameData.board;
    this.gameId = gameData.gameId;
    this.gameStatus = "player1";
    this.playerStatus = gameData.status;
    this.opponentName = gameData.opponent;
    console.log("gameStore created game");
    this.emit("gameCreated");

  };

  updateGame = (board) => {
    this.gameData = board;
    if (this.gameStatus == "player1") {
      this.gameStatus = "player2";
    } else {
      this.gameStatus = "player1";
    }
    console.log("gameStore updated game");
    this.emit("gameUpdated");
  }

  finishGame = (board) => {
    this.gameData = board;
    this.gameStatus = "finished";
    this.emit("gameUpdated");
  }

  gameStoreHandler = (action) => {
    switch (action.type) {
      case "CREATE_GAME":
        this.createGame(action.gameData);
        break;
      case "UPDATE_GAME":
        this.updateGame(action.board);
        break;
      case "FINISH_GAME":
        this.finishGame(action.board);
        break;
    }
  };
}

const gameStore = new GameStore;
dispatcher.register(gameStore.gameStoreHandler.bind(gameStore));

export default gameStore;

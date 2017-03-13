import dispatcher from "../dispatcher";

export function createGame(gameData) {
  console.log("create game action fired");

  dispatcher.dispatch({
    type: "CREATE_GAME",
    gameData: gameData
  });
}

export function updateGame(board) {
  console.log("update action fired");

  dispatcher.dispatch({
    type: "UPDATE_GAME",
    board: board
  });
}

export function finishGame(board) {
  dispatcher.dispatch({
    type: "FINISH_GAME",
    board: board
  });
}

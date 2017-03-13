import dispatcher from "../dispatcher";

export function updateChat(message) {

  dispatcher.dispatch({
    type: "UPDATE_CHAT",
    message: message
  });

  console.log("A chat action was fired");
}

import dispatcher from "../dispatcher";

export function updateChat(chat) {

  dispatcher.dispatch({
    type: "UPDATE_CHAT",
    chat: chat
  });

  console.log("A chat action was fired");
}

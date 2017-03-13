import { EventEmitter } from "events";
import dispatcher from "../dispatcher.js";

class ChatStore extends EventEmitter {
  constructor() {
    super();
    this.chatData = [];
  };

  updateChat = (message) => {
    let id = this.chatData.length + 1;
    message["id"] = id.toString();
    this.chatData.push( Object.assign({}, message) );
    this.emit("chatUpdated");
    this.chatData.forEach(function(obj) {
    })
  };

  getChat = () => { return this.chatData};

  chatStoreHandler = (action) => {
    switch (action.type) {
      case "UPDATE_CHAT": {
        this.updateChat(action.message);
      }
    }
  };
}

const chatStore = new ChatStore;
dispatcher.register(chatStore.chatStoreHandler.bind(chatStore));
window.dispatcher = dispatcher;

export default chatStore;

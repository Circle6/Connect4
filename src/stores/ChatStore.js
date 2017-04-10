import { EventEmitter } from "events";
import dispatcher from "../dispatcher.js";

class ChatStore extends EventEmitter {
  constructor() {
    super();
    this.chatData = [];
  };

  updateChat = (chat) => {
    this.chatData = chat;
    this.emit("chatUpdated");
  };

  getChat = () => { return this.chatData};

  chatStoreHandler = (action) => {
    switch (action.type) {
      case "UPDATE_CHAT": {
        this.updateChat(action.chat);
      }
    }
  };
}

const chatStore = new ChatStore;
dispatcher.register(chatStore.chatStoreHandler.bind(chatStore));
window.dispatcher = dispatcher;

export default chatStore;

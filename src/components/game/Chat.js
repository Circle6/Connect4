import React from 'react';
import ChatStore from '../../stores/ChatStore';
import Message from './Message';
import * as ChatActions from '../../actions/ChatActions';

class Chat extends React.Component {

    constructor() {
      super();
      this.state = {
        chatData: []
      };
    }

    componentWillMount() {
      ChatStore.on("chatUpdated", () => {
        this.setState({ chatData: ChatStore.getChat() })
      });

      socket.on("update chat", ChatActions.updateChat);
      socket.on("init chat", this.init);
    }

    init = (data) => {

      this.setState({
        status: data.status,
        user: data.user,
        gameId: data.gameId
      });
    }

    submitMessage = (e) => {
      if (e.key === 'Enter') {
        socket.emit( 'new message', {
          gameId: this.state.gameId,
          user: this.state.user,
          status: this.state.status,
          text: e.target.value,
        });

        e.target.value = "";
      }
    }

    render() {

      const Chat = this.state.chatData.map((message) =>
        <Message key={message.id} user={message.user} text={message.text} status={message.status}/>
      );

      const chatBoxStyle = {
        marginTop: "10px",
        paddingLeft: "10px",
        width: "100%",
        height: "80%",
        backgroundColor: "white",
        border: "1px solid #939393",
        display: "block",
        overflowY: "scroll"
      };

      const chatStyle = {
        height: "500px",
        width: "100%",
        margin: "0 auto"
      }

      const inputStyle = {
        width: "100%",
        marginTop: "10px",
        border: "1px solid #939393",
        paddingLeft: "5px"
      }

      return (
        <div style={chatStyle}>
          <div style={chatBoxStyle}>
            {Chat}
          </div>
          <input type="text" style={inputStyle} onKeyPress={this.submitMessage} />
        </div>
      );
    }
  }

export default Chat;

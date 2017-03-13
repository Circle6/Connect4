import React from 'react';

class Message extends React.Component {

    constructor() {
      super();
    }

    render() {

      let color = "";

      if (this.props.status == "player1") {color = "red"}
      else {color = "blue"}

      const messageStyle = {
        color: color,
        width: "100%",
        leftMargin: "10px",
        wordWrap: "break-word"
      };

      return (
        <div style={messageStyle}>
          {this.props.user}: {this.props.text}
        </div>
      );
    }
  }

export default Message;

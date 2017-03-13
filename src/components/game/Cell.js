import React from 'react';

class Cell extends React.Component {

    constructor() {
      super();
    }

    render() {

      let color = "";

      if (this.props.status == "player1") {color = "red"}
      else if (this.props.status == "player2") {color = "blue"}
      else {color = "white"}

      const squareStyle = {
        backgroundColor: "yellow",
        width: "70px",
        height: "70px",
        display: "inline-block"
      };

      const circleStyle = {
        backgroundColor: color,
        width: "60px",
        height: "60px",
      	MozBorderRadius: "30px",
      	WebkitBorderRadius: "30px",
      	borderRadius: "30px",
        display: "block",
        position: "absolute",
        marginTop: "5px",
        marginLeft: "5px"
      };

      return (
        <div style={squareStyle}>
          <div style={circleStyle} />
        </div>
      );
    }
  }

export default Cell;

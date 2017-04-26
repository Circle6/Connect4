import React from 'react';

class Username extends React.Component {

  constructor() {
    super();
    this.state = {
      user: ""
    };
  }

  handleChange = (e) => {
    this.setState({user: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    socket.emit('submit user', this.state.user);
  }

  componentDidMount() {
  }

  render() {

    const rowStyle = {
      display: "table-cell",
      verticalAlign: "middle"
    }

    const submitStyle = {
      height: "70%",
      width: "70%",
      maxHeight: "400px",
      maxWidth: "500px",
      margin: "auto",
      border: "10px solid yellow",
      borderRadius: "10%",
      backgroundColor: "white"
    }

    return (

      // <div className="container">
      //   <div className="row" id="userNameArea">
      //     <div className="col-sm-3">
      //     </div>
      //     <div className="col-sm-6 well">
      //       <form id="userNameForm" onSubmit={this.handleSubmit}>
      //         <div className="form-group">
      //           <label>Enter Username</label>
      //           <input className="form-control" value={this.state.value} onChange={this.handleChange}/>
      //           <br />
      //           <input type="submit" className="btn btn-primary" value="Start Playing" />
      //         </div>
      //       </form>
      //     </div>
      //     <div className="col-sm-3">
      //     </div>
      //   </div>
      // </div>
      <div style={rowStyle}>
        <div style={submitStyle}>
          <h1>Connect 4</h1>
          <label>Enter Username</label>
          <input value={this.state.value} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Start Playing</button>
        </div>
      </div>
    );
  }
}

export default Username;

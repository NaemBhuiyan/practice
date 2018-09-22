import React, { Component } from "react";

class App extends Component {
  render() {
    const { name, imageURL } = this.props;
    return (
      <div className="card shadow-lg">
        <img src={imageURL} alt={name} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
        </div>
      </div>
    );
  }
}

export default App;

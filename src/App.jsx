import React, { Component } from "react";
import Card from "./Components/Card";

class App extends Component {
  state = {
    cards: [
      {
        name: "Humayun",
        imageURL: "https://images.indianexpress.com/2018/01/gal-gadot-759.jpg"
      },
      {
        name: "Naem",
        imageURL:
          "https://static.arageek.com/wp-content/uploads/2017/09/Emma-Watson-1.jpg"
      },
      {
        name: "Tamim",
        imageURL:
          "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/06/28/Pictures/_b6e8e466-7aba-11e8-98f1-ed5cda4a01f0.jpg"
      }
    ]
  };
  render() {
    const { cards } = this.state;
    return (
      <div className="container">
        <div className="card-columns">
          {cards.map(card => (
            <Card name={card.name} imageURL={card.imageURL} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

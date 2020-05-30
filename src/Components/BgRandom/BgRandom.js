import React from 'react';
import {BgButton} from "../BgButton/bgButton";

export class BgRandom extends React.Component {
  constructor(props) {
    super(props);
    this.state={color:[29,25,38]}
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.applyColor();
  }
  
  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  //returns the colors in rgb(0,0,0) format
  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  handleClick () {
    this.setState({color: this.generateColor()});
  }

  //Changes the color of the background if the component did mount or has been changed
  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  //This allows the color to print in a neater format
  neatenColor (colorArray) {
    return "RGB: " + colorArray.join(", ");        
}

  generateColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  render() {
    return (
      <div>
        <h2>Background Colour</h2>
        <p>{this.neatenColor(this.state.color)}</p>
        <BgButton 
        onClick = {this.handleClick} />
      </div>
    );
  }
}
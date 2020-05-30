import React from "react";
import {TxtButton} from "./TxtButton"

export class TxtRandom extends React.Component {
    constructor(props) {
        super(props);
        this.state={fontColor: [217,161,59] }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.applyFontColor();
    }

    componentDidUpdate(prevProps, prevState) {
        this.applyFontColor();
    }

    applyFontColor () {
        const fontColor = this.formatFontColor(this.state.fontColor);
        document.body.style.color = fontColor;
    }

    //This allows the color to print in a neater format
    neatenColor (colorArray) {
        return "RGB: " + colorArray.join(", ");        
    }

    handleClick() {
        this.setState({fontColor: this.generateFontColor()})
    }    

    generateFontColor () {
        const newColor = [];
        for (let i = 0; i < 3; i++) {
            newColor.push(Math.floor(Math.random()*255))
        }
        return newColor;
    }

    formatFontColor (colorArray){
        return "rgb(" + colorArray.join(", ") + ")"       
    }

    render () {
        return (
            <div>
                <h2>Font Color</h2>
                <p>{this.neatenColor(this.state.fontColor)}</p>
                <TxtButton onClick = {this.handleClick} />
            </div>
        )
    }
}


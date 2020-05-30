import React from "react";
import {AccentButton} from "./AccentButton"

export class AccentRandom extends React.Component {
    constructor(props) {
        super(props);
        this.state={fontColor: [155,150,150] }
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
        //document.body.style.color = fontColor;
        document.getElementById("test").style.color = fontColor
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
                <h2>Accent Font Color</h2>
                <p id="test">{this.neatenColor(this.state.fontColor)}</p>
                <AccentButton onClick = {this.handleClick} />
            </div>
        )
    }
}
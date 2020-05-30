import React from "react";
import {FontButton} from "./FontButton";

export class RandomFont extends React.Component {
    constructor(props) {
        super(props)
        this.state = {fontFamily: "Times New Roman"}
        this.handleClick = this.handleClick.bind(this);
    };

    componentDidMount() {
        this.applyFont();
    }

    componentDidUpdate(prevProps, prevState) {
        this.applyFont();
    }

    applyFont () {
        const newFont  =  this.state.fontFamily;
        document.body.style.fontFamily = newFont;

    }

    handleClick() {
        this.setState({fontFamily: this.generateFont()})
    } 

    generateFont () {
        const listOfFonts = ["Arial", "Helvetica", "Courier New", "Verdana", "Courier", "Arial Narrow", "Candara", "Geneva", "Calibri", "Optima", "Cambria", "Garamond", "Perpetua", "Monaco", "Didot", "Lucida Bright", "Copperplate"]
        const fontPosition = (Math.floor(Math.random() * listOfFonts.length));
        return listOfFonts[fontPosition];
    }

    render() {
        return (
            <div>
                <h2>Font Family</h2>
                <p>{this.state.fontFamily}</p>
                <FontButton onClick = {this.handleClick} />
            </div>
        )
    }


}
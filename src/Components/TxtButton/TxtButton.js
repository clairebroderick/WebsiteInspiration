import React from "react";

export class TxtButton extends React.Component {
    render () {
        return <button onClick = {this.props.onClick}>Change Font Color</button>
    }
};
import React from "react";

export class FontButton extends React.Component {    
    render () {
        return <button onClick = {this.props.onClick}>Change Font</button>
    }
};
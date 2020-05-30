import React from "react";

export class BgButton extends React.Component {
    render () {
        return <button onClick= {this.props.onClick}>Change Background</button>
    }
}

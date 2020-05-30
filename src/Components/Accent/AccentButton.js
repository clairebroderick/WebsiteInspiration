import React from "react"

export class AccentButton extends React.Component {
    render () {
        return <button onClick = {this.props.onClick}>Change Accent Color</button>
    }
}
import React, { Component } from 'react';

export default class TicTacToeCell extends Component {    
    render() {
    const styling = {
        border: "1px solid black",
        width: "40px",
        height: "40px",
        textAlign: "center",
        };

        return (
            <div className="cell" style={styling} onClick={this.props.onClick}>
                {this.props.value}
            </div>
        );
    }
}
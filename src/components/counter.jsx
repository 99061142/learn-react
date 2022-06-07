import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.standardColor = "black";
        this.state = {
            count: 0,

            countStyles: {
                fontSize: "50px",
                color: this.standardColor,
            },
        };
    }

    increment() {
        let newCount = this.state.count + 1;
        this.updateCountState(newCount);
    }

    decrement() {
        let newCount = this.state.count - 1;
        this.updateCountState(newCount);
    }

    updateCountState(newCount) {
        this.setState(previousState => ({
            count: newCount,

            countStyles: {
                ...previousState.countStyles,
                color: this.newCountColor(newCount),
            },
        }));
    }
    
    newCountColor(newCount) {
        if(!this.state.count) { return (newCount === 1) ? "darkGreen" : "red"; } // If the count before the change is equal to 0
        else if(!newCount) { return this.standardColor; } // If the count after the change is equal to 0
        else { return this.state.countStyles.color; } // If the color don't need to get changed
    }

    render() {
        return (
            <div>
                <button className="btn btn-danger" onClick={this.decrement.bind(this)}>-</button>
                <span style={this.state.countStyles}>{this.state.count}</span>
                <button className="btn btn-success" onClick={this.increment.bind(this)}>+</button>
            </div>
        );
    }
}
import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };

        this.countStyles = {
            fontSize: "30px",
            color: this.countText(),
        };
    }

    increment() {
        let count = this.state.count;
        let newCount = this.state.count + 1;

        this.setState({
            count: newCount
        });

        this.countText(count, newCount);
    }

    decrement() {
        let count = this.state.count;
        let newCount = this.state.count - 1;

        this.setState({
            count: newCount
        });

        this.countText(count, newCount);
    }

    countText(count, newCount) {
        let color;

        if(count === 0){ color = (newCount === 1) ? "green" : "red"; } // If the count before the change was equal to 0
        else if(newCount === 0){ color = "black"; } // If the count after the change is equal to 0

        if(count === 0 || newCount === 0){ this.countStyles = {...this.countStyles, color}; } // Change the color of the count
    }
    
    render() {
        return (
            <div>
                <button className="btn btn-danger" onClick={this.decrement.bind(this)}>-</button>
                <span style={this.countStyles}>{this.state.count}</span>
                <button className="btn btn-success" onClick={this.increment.bind(this)}>+</button>
            </div>
        );
    }
}
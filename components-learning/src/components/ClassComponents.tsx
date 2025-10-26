import React, { Component } from 'react';
 

class CounterClass extends Component <{count?:number}, {count : number}>{ 
    constructor(props :{count?:number}) {
        super(props);
        // initialize state
        this.state = {
            count: 0,
        };
    }

    // method to handle increment 
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    // method to handle decrement 
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: '50px' }}>  
                <h2>Counter: {this.state.count}</h2>
                <button onClick={this.decrement} style={{ marginRight: '10px' }}>
                    -
                </button>
                <button onClick={this.increment}>+</button> 
            </div>
        );
    }
}

export default CounterClass; 
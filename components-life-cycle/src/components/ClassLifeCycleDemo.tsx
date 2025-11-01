 import React, { Component } from 'react'
type IState = {
    count:number;
};
type IProps = {};


class ClassLifeCycleDemo extends Component <IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { count :0};
        console.log("constructor : component is being created");
    }

    static getDerivedStateFromProps(props:any, state:any) {
        console.log("getDerivedStateFromProps: sync state with props if needed");
        return null; // no change to state
    }

    componentDidMount() {
        console.log("componentDidMount: component mounted to DOM")
    }

    shouldComponentUpdate(nextProps:any, nextState:any) {
        console.log("shouldComponentUpdate: ", "yes");
        return true;

    }

    getSnapshotBeforeUpdate(prevProps:any, prevState:any) {
        console.log("getSnapShotBeforeUpdate: Just before DOM is updated");
        return null;
    }

    componentDidUpdate(prevProps:any, prevState:any, snapShot:any) {
        console.log("componentDidUpdate: component updated");
    }
    componentWillMount() {
        console.log("componentWillMount: component is being removed");
    }

    increment=() => {
        this.setState({ count:this.state.count +1});
    };

      decrement=() => {
        this.setState({ count:this.state.count -1});
      };
  render() {
    console.log("Render: Rendering component");
    return (
      <div>
        <h2>Lifecycle Demo Component</h2>
        <p>Count: {this.state.count}</p>
        <button onClick = {this.increment}>increment</button>
          <button onClick = {this.decrement}>decrement</button>
      </div>
    );
  }
}

export default ClassLifeCycleDemo;
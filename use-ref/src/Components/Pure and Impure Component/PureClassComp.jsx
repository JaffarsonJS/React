import React, { PureComponent } from 'react'

export default class PureClassComp extends PureComponent {

    state={count : 0}

    updateCounter=()=>{
        this.setState({count: this.state.count+1})
    }
    updateCounter5=()=>{
        this.setState({count:5})
    }
    
    render() {
      console.log("Rendering")
    return (
      <div>
        <h1>Pure Component</h1>
        <br />
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.updateCounter}>Update</button>
        <button onClick={this.updateCounter5}>Update5</button>
      </div>
    )
  }
}

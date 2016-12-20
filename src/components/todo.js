import React, {Component} from 'react'

export default class Todo extends Component {
  
  constructor() {
    super()
    this.state = {
      dispText: ''
    }
    this.handleInput = this.handleInput.bind(this)
  }

  render() {
    return (
      <div>ToDo :
        <input
          type="text" 
          value={this.state.dispText}
          onChange={this.handleInput}
        />
      </div>)
  }
  
  handleInput(event) {
    this.setState({
      dispText: event.target.value
    })
    console.log(this.state.dispText)
  }
}
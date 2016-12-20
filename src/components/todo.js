import React, {Component} from 'react'

export default class Todo extends Component {
  
  constructor() {
    super()
    this.state = {
      todoItems: [],
      newItem: ''
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
  }

  render() {
    var currentItems = this.state.todoItems.map((item, i) =>
      <div key={item.id}>
        <input
          type="checkbox"
          defaultChecked={false}
          onChange={() => this.handleRemove(i)}
        />{item.name}
      </div>)
      
    return (
      <div>
        ToDo :
        <input
          type="text" 
          value={this.state.newItem}
          onChange={this.handleEdit}
        />
        <input
          type="button"
          value="Add"
          onClick={this.handleAdd}
        />
        {currentItems}
      </div>)
  }
  
  handleEdit(event) {
    this.setState({
      newItem: event.target.value
    })
  }

  handleAdd(event) {
    var idName = {id: Date.now(), name: this.state.newItem}
    var newItems = this.state.todoItems.concat(idName)
    this.setState({todoItems: newItems})
    this.setState({newItem: ''})
  }

  handleRemove(i) {
    var tempItems = this.state.todoItems
    tempItems.splice(i, 1)
    this.setState({todoItems: tempItems})
  }
}
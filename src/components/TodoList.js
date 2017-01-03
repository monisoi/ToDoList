import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) =>
          <TodoItem text={todo.text}
                    key={index}
                    onChange={() => this.props.onTodoClick(index)} />
        )}
      </ul>
    )
  }
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { edit, add, remove } from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

class App extends Component {
  render() {
    const { dispatch, todos } = this.props
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(add(text))
          } />
        <TodoList
          todos={todos}
          //eslint
          onTodoClick={index =>
            dispatch(remove(index))
          } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
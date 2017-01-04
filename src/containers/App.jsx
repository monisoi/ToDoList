import React from 'react';
import { connect } from 'react-redux';
import { add, remove } from '../actions';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

function App(props) {
  const { dispatch, todos } = props;
  return (
    <div>
      <AddTodo
        onAddClick={text =>
          dispatch(add(text))
        }
      />
      <TodoList
        todos={todos}
        onTodoClick={index =>
          dispatch(remove(index))
        }
      />
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);

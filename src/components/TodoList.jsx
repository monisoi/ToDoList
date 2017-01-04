import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) =>
        <TodoItem
          text={todo.text}
          key={index}
          onChange={() => props.onTodoClick(index)}
        />,
      )}
    </ul>
  );
}

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default TodoList;

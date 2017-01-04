import React, { PropTypes } from 'react';

function TodoItem(props) {
  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={false}
        onChange={props.onChange}
      />
      {props.text}
    </div>
  );
}

TodoItem.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;

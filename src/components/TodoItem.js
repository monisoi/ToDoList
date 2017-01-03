import React, { Component, PropTypes } from 'react'

export default class TodoItem extends Component {
  render() {
    return (
      <div>
        <input
          type="checkbox"
          defaultChecked={false}
          onChange={this.props.onChange}
        />
        {this.props.text}
      </div>
    )
  }
}

TodoItem.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}
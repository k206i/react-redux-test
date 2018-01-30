import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

  state = {
    comment: '',
  };

  handleChange = (event) => {
    this.setState({
      comment: event.target.value,
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({
      comment: '',
    })
  };

  render() {
    return (
      <form
        className='comment-box'
        onSubmit={this.handleSubmit}>
        <textarea
          onChange={this.handleChange}
          value={this.state.comment}/>
        <button action='submit'>Submit</button>
      </form>
    )
  }
}

export default connect(null, actions)(CommentBox);
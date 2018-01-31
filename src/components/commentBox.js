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
        <h4>Комментарии</h4>
        <textarea
          onChange={this.handleChange}
          value={this.state.comment}/>
        <div>
          <button action='submit'>Submit</button>
        </div>
      </form>
    )
  }
}

export default connect(null, actions)(CommentBox);
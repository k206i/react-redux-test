import React, { Component } from 'react';
import CommentBox from './commentBox';
import CommentList from './commentList';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}

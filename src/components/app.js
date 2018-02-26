import React, { Component } from 'react';
import CommentBox from './commentBox';
import CommentList from './commentList';
import Header from './header'
import UserList from './userList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CommentBox />
        <CommentList />
        <UserList />
        {this.props.children}
      </div>
    );
  }
}

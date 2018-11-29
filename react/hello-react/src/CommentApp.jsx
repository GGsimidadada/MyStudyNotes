import React, { Component } from 'react';

import CommentList from './CommentList';
import CommentInput from './CommentInput';

class CommentApp extends Component {
  constructor () {
    super();
    this.state = {
      comments: []
    };
  }

  handleSubmit(comment) {
    if (!comment) return;
    if (!comment.username) return alert('请输入用户名');
    if (!comment.content) return alert('请输入评论内容');
    this.state.comments.push(comment);
    this.setState({ comments: this.state.comments });
  }

  render () {
    return (
      <div className='wrapper' >
        <CommentInput
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentApp;
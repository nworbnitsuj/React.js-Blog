import React, { Component } from 'react';
// Load in Comment component
import Comment from './Comment.js'
import './App.css';


class Post extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>By {this.props.author}</p>
        <div>
          <p>{this.props.body}</p>
        </div>
        <h3>Comments:</h3>
        {/* Render Comment component, passing in data */}
        <Comment body={this.props.comments[0]} />
      </div>
    );
  }
}

export default Post;

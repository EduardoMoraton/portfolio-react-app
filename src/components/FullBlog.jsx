import React, { Component } from 'react';
import Post from './FullBlog/Post';

export class FullBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: window.location.href,
    };
  }
  

  render() {
    const postname = this.state.currentUrl.split("/")[4]
    return (
      <div className={'flex '}>
        {postname==null?<>A</>:<Post postpath={postname}></Post>}
      </div>
    );
  }
}

export default FullBlog;

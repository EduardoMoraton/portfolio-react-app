import React, { Component } from 'react';
import Post from './FullBlog/Post';
import Footer from './Footer';
import PostList from './FullBlog/PostList';
import BlogHeader from './FullBlog/BlogHeader';

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
      <div>
          <BlogHeader/>
         <div className={'flex align-center justify-center min-h-screen w-screen mb-[200px] p-32'}>
          <div className={'w-[800px]'}>
            {postname===""?<PostList/>:<Post postpath={postname} language={"en"}></Post>}
          </div>
      </div>
      <Footer></Footer>
      </div>
     
    );
  }
}

export default FullBlog;

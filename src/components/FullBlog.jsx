import React, { Component } from 'react';
import Post from './FullBlog/Post';
import Footer from './Footer';

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
      <div >
         <div className={'flex align-center justify-center w-full mb-[200px]'}>
        <div className={'w-[800px]'}>
          {postname==null?<>A</>:<Post postpath={postname} language={"en"}></Post>}
        </div>
      </div>
      <Footer></Footer>
      </div>
     
    );
  }
}

export default FullBlog;

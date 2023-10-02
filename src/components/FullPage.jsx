import React, { Component } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Experience from './Experience'
import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer'

export default class FullPage extends Component {
  render() {
    return (
      <div className={'scroll-smooth'}>
        <Navbar/>
        <Home/>
        <About/>
        <Experience/>
        <Blog/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
}

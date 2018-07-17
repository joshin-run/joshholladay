// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles/app.css';
// import Sidebar from './components/Sidebar'
// import Blog from './components/Blog'
// import Links from './components/Links'
// import About from './components/About'
// import Footer from './components/Footer'
// import Post from './components/Post'
// import Posts from './components/Posts'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      screenIndex: 1,
      posts: Posts
    }
  }

  updateScreen(newScreenIndex) {
    this.setState({
      screenIndex: newScreenIndex
    });
  }

  render() {
    let ActiveScreen
    <Sidebar posts={this.state.posts.posts}/>
    if(this.state.screenIndex === 1) {
      ActiveScreen = <Blog/>
    }
    if(this.state.screenIndex === 2) {
      ActiveScreen = <Links />
    }
    if(this.state.screenIndex === 3) {
      ActiveScreen = <About />
    }
    if(this.state.screenIndex === 4) {
      ActiveScreen = <Post />
    }
    console.log('hello!')
    console.log(this.state.posts.posts);
  return (
    <div className="app">
      <div id="home" className="app-wrapper">
        <div className="app-nav-menu">
          <ul id="menu">
            <li onClick={() => { this.updateScreen(1)}}>Blog</li>
            <li onClick={() => { this.updateScreen(4)}}>Post</li>
            <li onClick={() => { this.updateScreen(2)}}>Links</li>
            <li onClick={() => { this.updateScreen(3)}}>About</li>
          </ul>
        </div>
        <div className="app-header">
          <img id="header" src="./img/hello-dev-header-full-thin.jpg" alt="Hello Dev" />
        </div>
        <div className="app-main"></div>
          <p onClick={() => { this.updateScreen(4)}}>New Post</p>
          <Sidebar />
          <div className="main-content">
          {ActiveScreen}
          </div>
        </div>
        <Footer />
      </div>
    )
  }

}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple Blog</h1>
          <nav>
            <Link className="link" to="/home">Home</Link>
            <Link className="link" to="/post">Post</Link>
          </nav>
        </header>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default App

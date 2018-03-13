import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Simple Blog</h1>
        </header>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

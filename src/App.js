import React, { Component } from 'react';
import './App.css';

class Searchbar extends Component {
  render() {
    return (
      <div style={{width: '100%', display: 'block'}}>
        <input style={{width: '50%', margin: '0 auto', 'font-size': '40px'}} type="search"/>
      </div>
    )
  }
}

class Artist extends Component {
  render() {
    return (
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2>ARTIST</h2>
        <img src="http://via.placeholder.com/400x400" alt=""/>
      </div>
    )
  }
}

class Concerts extends Component {
  render() {
    return (
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2>CONCERTS</h2>
        <ul>
          <li>Concert</li>
          <li>Concert</li>
          <li>Concert</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar/>
        <Artist/>
        <Concerts/>
      </div>
    );
  }
}

export default App;

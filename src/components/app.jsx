import React from 'react';
import './app.css';

class App extends React.Component {
  render() {
  return (
      <div className="App">
        <div className="App-header">
          <h1>Hello World !! </h1>
          <h3>{ new Date().toString()}</h3>
        </div>
      </div>
    );
}
}
export default App;

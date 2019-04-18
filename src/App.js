import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputText: '',
    inputLength: 0
  };

  inputChangeHandler = (event) => {
    let input = event.target.value;
    this.setState({
      inputText: input,
      inputLength: input.length
    });
  }

  deleteCharHandler = (index) => {
    const inputText = [...this.state.inputText];
    inputText.splice(index, 1);
    // inputText.join('');
    this.setState({inputText: inputText.join('')});
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };

    let charComponent = null;
    if (this.state.inputText) {
      charComponent = (
        <div>
          {Array.prototype.map.call(this.state.inputText, (char, index) => {
            return <Char inputText={char} key={index} deleteHandler={this.deleteCharHandler.bind(this, index)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Input Field</h1>
        <input
          style={style} 
          type="text" 
          value={this.state.inputText}
          onChange={ event => this.inputChangeHandler(event)} />
        <Validation length={this.state.inputLength} />
        {charComponent}
      </div>
    );
  }
}

export default App;
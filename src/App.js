import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class MarkDownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  
  render() {
    return (
      <div id="markdown-previewer">
        <div id="textarea-container">
          <textheader id="textareabar"><text id="bar-label">Text editor</text></textheader>
          <textarea id="editor" onChange={this.handleChange} value={this.state.input}></textarea>
        </div>
        <div id="markdown-container">
          <textheader id="markdown-bar"><text id="bar-label">Markdown previewer</text></textheader>
          <div id="preview" class="scrollable-div">{this.state.input}</div>
        </div>
        <p>Created by <a href="https://linkedin.com/in/finn-cummins" target="_blank" class="linkedin">Finn Cummins</a></p>
      </div>
    )
  }
}

export default MarkDownPreviewer;
//ReactDOM.render(<MarkDownPreviewer/>, document.getElementById("previewer"));

/*const marked = require('marked');

let markdownText = `
# Hello, world!
This is a paragraph in **markdown**!
`;

let htmlText = marked(markdownText);*/

console.log("hello World");

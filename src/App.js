import React from 'react';
import logo from './logo.svg';
import './App.css';
import { marked } from 'marked';

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
      input:"# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:\nHeres some code, `<div></div>`, between 2 backticks.\n```\n// this is multi-line code:function anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n}\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n- And of course there are lists.\n- Some are bulleted.\n- With different indentation levels.\n- That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n\n"
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
          <div id="preview" className="scrollable-div" dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}></div>
        </div>
        <p>Created by <a href="https://linkedin.com/in/finn-cummins" target="_blank" class="linkedin">Finn Cummins</a></p>
      </div>
    )
  }
}

export default MarkDownPreviewer;
//ReactDOM.render(<MarkDownPreviewer/>, document.getElementById("previewer"));

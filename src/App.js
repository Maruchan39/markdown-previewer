import React, { useState } from "react";
import Editor from "./Editor";
import Previewer from "./Preview";
import defaultMarkdown from "./default-markdown";

function App() {
  const [text, setText] = useState(defaultMarkdown);
  const clearEditor = () => {
    setText("");
  }
  return (
    <div id="container">
      <h1>Markdown Previewer</h1>
      <h4>Editor</h4>
      <Editor text={text} setText={setText} />
      <button className="btn btn-warning" onClick={() => clearEditor()}>Clear</button>
      <h4>Preview</h4>
      <Previewer text={text} />
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import Editor from "./Editor";
import Previewer from "./Preview";
import placeholder from "./placeholder";
//Rename placeholder



function App() {
  const [text, setText] = useState(placeholder);
  return (
    <div id="container">
     <h1>Markdown Previewer</h1>
     <Editor text={text} setText={setText} />
     <Previewer text={text} />
    </div>
  );
}

export default App;

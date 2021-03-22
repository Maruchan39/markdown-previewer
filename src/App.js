import React, {useState} from 'react';
import Editor from "./Editor";
import Previewer from "./Preview";
import defaultMarkdown from "./default-markdown";



function App() {
  const [text, setText] = useState(defaultMarkdown);
  return (
    <div id="container">
     <h1>Markdown Previewer</h1>
     <Editor text={text} setText={setText} />
     <Previewer text={text} />
    </div>
  );
}

export default App;

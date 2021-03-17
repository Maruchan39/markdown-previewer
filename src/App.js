import React, {useState} from 'react';
import Editor from "./Editor";
import Previewer from "./Preview";


function App() {
  const [text, setText] = useState('');
  return (
    <>
     <h1>Markdown Previewer</h1>
     <Editor text={text} setText={setText} />
     <Previewer text={text} />
    </>
  );
}

export default App;

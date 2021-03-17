import React from 'react';
const Editor = ({text, setText}) => {
    return <div>
        <input type="text" value={text} onChange={(e) => {setText(e.target.value);console.log(text)}} />
    </div>
}

export default Editor;
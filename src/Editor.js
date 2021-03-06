import React from "react";
const Editor = ({ text, setText }) => {
  return (
    <textarea
      id="editor"
      type="text"
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
  );
};

export default Editor;

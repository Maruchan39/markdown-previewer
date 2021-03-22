import React from "react";
import marked from "marked";

const Previewer = ({ text }) => {
  const getMarkdownText = (text) => {
    let rawMarkup = marked(text);
    return { __html: rawMarkup };
  };

  return (
    <div id="preview">
      <p dangerouslySetInnerHTML={getMarkdownText(text)} />
    </div>
  );
};

export default Previewer;

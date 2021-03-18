import React, { useState, useEffect } from "react";
import marked from "marked";
// Import actually seems to be sucessfull

const Previewer = ({ text }) => {
  const getMarkdownText = (text) => {
    let rawMarkup = marked(text);
    return { __html: rawMarkup };
  };

  return <div dangerouslySetInnerHTML={getMarkdownText(text)} />;
};

export default Previewer;

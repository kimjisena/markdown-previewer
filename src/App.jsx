import React, {useState} from "react";
import { marked } from "marked";
import Prism from 'prismjs';

import Header from "./components/desktop/Header";
import Editor from "./components/desktop/Editor";
import Divider from "./components/desktop/Divider";
import Previewer from "./components/desktop/Previewer";

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`js
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function(code) {
    return Prism.highlight(code, Prism.languages.js, 'js');
  },
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});

function App() {
  const [text, setText] = useState(placeholder);
  const [render, setRender] = useState('');

  const html = marked.parse(text, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      return res;
    }
  });

  const parseText = (event) => {
    setText(event.target.value);
    setRender(marked.parse(event.target.value));
  };

  return (
    <>
      <Header />
      <Editor text={text} parseText={parseText} />
      <Divider />
      <Previewer html={render === '' ? html : render} />
    </>
  );
}

export default App;
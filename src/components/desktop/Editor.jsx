import React from 'react';
import {IoMdInformationCircle} from 'react-icons/io';
import {GoPrimitiveDot} from 'react-icons/go';
import {VscFiles} from 'react-icons/vsc';
import {VscSearch} from 'react-icons/vsc';
import {VscSourceControl} from 'react-icons/vsc';
import {VscDebugAlt} from 'react-icons/vsc';
import {VscExtensions} from 'react-icons/vsc';
import {VscAccount} from 'react-icons/vsc';
import { VscSettingsGear } from 'react-icons/vsc';


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


function Editor() {
  return (
    <div className={`fixed left-0 w-[49.8%] h-[90vh] top-[10vh]`}>
        <div className={`absolute left-0 h-full w-[8%] bg-subhead flex flex-col justify-between`}>
            <div className={`justify-self-start h-[40%] flex flex-col justify-evenly items-center`}>
                <VscFiles size={`24px`} />
                <VscSearch size={`24px`} />
                <VscSourceControl size={`24px`} />
                <VscDebugAlt size={`24px`} />
                <VscExtensions size={`24px`} />
            </div>
            <div className={`justify-self-end h-[20%] flex flex-col justify-evenly items-center`}>
                <VscAccount size={`24px`} />
                <VscSettingsGear size={`24px`} />
            </div>
        </div>
        <div className={`bg-subhead h-[5vh] text-subheadText text-xs px-[8%]`}>
            <div className={'flex h-full bg-black w-[20%] justify-evenly items-center'}>
                <IoMdInformationCircle className={`bg-black text-blue`} size={`16px`}/>
                <h1>
                    README.md
                </h1>
                <GoPrimitiveDot className={`text-[white]`} size={`16px`} />
            </div>
        </div>
        <textarea id="editor" className={`w-full h-[85vh] border-0 bg-black px-[9%]`} value={placeholder}>
        </textarea>
    </div>
  );
}

export default Editor;
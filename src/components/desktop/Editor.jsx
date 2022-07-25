import React from "react";

import {IoMdInformationCircle} from 'react-icons/io';
import {GoPrimitiveDot} from 'react-icons/go';
import {VscFiles} from 'react-icons/vsc';
import {VscSearch} from 'react-icons/vsc';
import {VscSourceControl} from 'react-icons/vsc';
import {VscDebugAlt} from 'react-icons/vsc';
import {VscExtensions} from 'react-icons/vsc';
import {VscAccount} from 'react-icons/vsc';
import { VscSettingsGear } from 'react-icons/vsc';

function Editor({text, parseText}) {
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
                <div>
                    README.md
                </div>
                <GoPrimitiveDot className={`text-[white]`} size={`16px`} />
            </div>
        </div>
        <textarea onChange={(event) => parseText(event)} id="editor" className={`w-full h-[85vh] bg-black px-[9%]`} value={text}>
        </textarea>
    </div>
  );
}

export default Editor;
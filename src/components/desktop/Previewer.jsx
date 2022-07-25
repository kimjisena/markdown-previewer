import React from 'react';
import {VscPreview} from 'react-icons/vsc';

function Previewer() {
  return (
    <div className={`fixed right-0 w-[49.8%] top-[10vh]`}>
        <div className={`bg-subhead h-[5vh] text-subheadText text-xs`}>
            <div className={'flex h-full bg-black w-[26%] justify-evenly items-center'}>
                <VscPreview className={`inline bg-black`} size={`16px`}/>
                <h1>
                    Preview README.md
                </h1>
            </div>
        </div>
        <div id='preview' className={`px-[8%]`}>Rendered markdown goes here</div>
    </div>
  )
}

export default Previewer
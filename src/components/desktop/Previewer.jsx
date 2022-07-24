import React from 'react';

function Previewer() {
  return (
    <div id='preview' className={`fixed right-0 w-[49.8%] top-[10vh]`}>
        <h1 className={`bg-subhead h-[5vh] text-subheadText text-xs`}><span className={`bg-black h-full inline-block py-2`}>Preview README.md</span></h1>
    </div>
  )
}

export default Previewer
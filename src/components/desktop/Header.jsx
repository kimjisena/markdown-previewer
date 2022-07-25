import React from 'react';

function Header() {
  return (
    <header className={`app-header fixed top-0 left-0 h-[10vh] w-full bg-light text-black`}>
        <div className={`text-center py-2`}>README.md - markdown-previewer - Usual Studio Code</div>
        <div className={`absolute bottom-0 flex justify-start w-full bg-[white]`}>
            <div className={`flex w-[30%] justify-evenly`}>
                <div>File</div>
                <div>Edit</div>
                <div>Selection</div>
                <div>View</div>
                <div>Go</div>
                <div>Run</div>
                <div>Terminal</div>
                <div>Help</div>
            </div>
        </div>
  </header>
  );
}

export default Header
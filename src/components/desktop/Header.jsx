import React from 'react';

function Header() {
  return (
    <header className={`app-header fixed top-0 left-0 h-[10vh] w-full bg-light text-black`}>
        <h1 className={`text-center py-2`}>README.md - markdown-previewer - Usual Studio Code</h1>
        <div className={`absolute bottom-0 flex justify-start w-full bg-[white]`}>
            <div className={`flex w-[30%] justify-evenly`}>
                <h2>File</h2>
                <h2>Edit</h2>
                <h2>Selection</h2>
                <h2>View</h2>
                <h2>Go</h2>
                <h2>Run</h2>
                <h2>Terminal</h2>
                <h2>Help</h2>
            </div>
        </div>
  </header>
  );
}

export default Header
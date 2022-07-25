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

const placeholder = `Reprehenderit non adipisicing dolor pariatur. Adipisicing non proident id officia exercitation consequat amet incididunt dolore incididunt velit reprehenderit voluptate Lorem. Et nulla aute id mollit.

Ex ex enim enim est nisi. Mollit in velit aute veniam in veniam duis et eiusmod. Id laborum pariatur aliquip quis nulla et. Minim pariatur ad fugiat amet. Qui consequat ut consectetur laboris laboris magna ex in cupidatat do occaecat aliqua. In duis consequat consequat nulla adipisicing tempor ad voluptate. Cillum sit qui qui duis labore est magna labore anim ex aute minim laboris.

Irure consequat officia culpa quis quis eiusmod labore anim est. Ea excepteur laboris fugiat et in aliquip exercitation cillum aute. Amet anim aliqua voluptate duis fugiat dolore laborum exercitation ex aliquip eu. Duis consectetur et cillum dolore cillum reprehenderit. Fugiat laborum amet id laboris eiusmod dolore nostrud voluptate eu ullamco officia aliqua sint. Sunt aliquip officia consectetur duis ex qui velit et non aliqua laborum voluptate Lorem velit. Mollit enim minim tempor incididunt quis reprehenderit tempor ullamco incididunt reprehenderit commodo mollit excepteur.

Adipisicing qui incididunt sunt consectetur officia aliqua tempor cillum ullamco magna id dolor labore. Ea pariatur anim consequat aute cupidatat occaecat aute. Proident elit eu veniam mollit. Irure nisi irure tempor quis voluptate consequat. Culpa eu et do officia reprehenderit minim ea elit commodo irure ut officia. Consequat velit ad tempor dolor ipsum enim incididunt ea veniam ad nulla magna irure ad. Excepteur eiusmod occaecat cupidatat velit eu culpa quis aute amet.

Aliqua sint duis aute Lorem consectetur proident esse labore labore ex cillum. Velit ad aliqua non amet aliquip non et minim. Deserunt deserunt dolore ullamco ipsum non enim proident pariatur officia elit. Fugiat minim ullamco occaecat reprehenderit ex. Est excepteur minim esse non velit. Amet aute amet ea occaecat. Consectetur qui magna quis nostrud.`

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
        <textarea id="editor" className={`w-full h-full border-0 bg-black px-[8%]`} value={placeholder}>
        </textarea>
    </div>
  );
}

export default Editor;
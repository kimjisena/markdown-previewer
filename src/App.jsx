import React, {useState} from "react";

import Header from "./components/desktop/Header";
import Editor from "./components/desktop/Editor";
import Divider from "./components/desktop/Divider";
import Previewer from "./components/desktop/Previewer";

function App() {
  const [pos, setPos] = useState(0);
  return (
    <>
      <Header />
      <Editor />
      <Divider />
      <Previewer />
    </>
  );
}

export default App;
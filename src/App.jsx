import Editor from "./components/desktop/Editor";
import Divider from "./components/desktop/Divider";
import Previewer from "./components/desktop/Previewer";

function App() {
  return (
    <>
      <header className={`app-header fixed top-0 left-0 h-[10vh] w-full bg-light text-black`}>
        <h1 className={`text-center py-4`}>README.md - ~/markdown-previewer - Usual Studio Code</h1>
      </header>

      <Editor />
      <Divider />
      <Previewer />
    </>
  );
}

export default App;
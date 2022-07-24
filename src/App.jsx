import Editor from "./components/desktop/Editor";
import Divider from "./components/desktop/Divider";
import Previewer from "./components/desktop/Previewer";

function App() {
  return (
    <div className={`relative h-full`}>
      <header className="app-header">
        <h1>Hello, Markdown Previewer!</h1>
      </header>

      <Editor />
      <Divider />
      <Previewer />
    </div>
  );
}

export default App;
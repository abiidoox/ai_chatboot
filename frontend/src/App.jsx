import Chat from "./components/Chat";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Chat avec TinyLlama</h1>
      <Chat />
    </div>
  );
}

export default App;
